import { useCallback, useState } from "react";
import {
  ArtsList,
  Container,
  ListWrap,
  SeacrhBlock,
  SearchInput,
} from "./styled";
import axios from "axios";
import { ArtTicket } from "../ArtTicket";
import { BASE_URL } from "../../constants";
import { useFormik } from "formik";
import * as Yup from "yup";
import { debounce } from "../../utils";
import { ArtData } from "../../types";
import { SearchLoader } from "./SearchLoader";
import { useNavigate } from "react-router-dom";

export interface MyFormValues {
  searchValue: string;
}

const validationSchema = Yup.object({
  searchValue: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .matches(/[A-Za-z0-9]/, "Can include numbers and letters")
    .required("Required"),
});

export const Search = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    data: [],
    config: { iiif_url: "" },
  });
  const formik = useFormik<MyFormValues>({
    initialValues: {
      searchValue: "",
    },
    validationSchema,
    onSubmit: ({ searchValue }) => {
      setIsLoading(true);
      const getSearchData = async () => {
        const { data } = await axios.get(
          `${BASE_URL}/v1/artworks/search?q=${searchValue}&limit=5`,
        );
        setSearchData(data);
        setIsLoading(false);
      };
      getSearchData();
    },
  });
  const debauncedSubmit = useCallback(debounce(formik.submitForm, 1000), []);
  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("searchValue", e.target.value, true);
    debauncedSubmit();
  };

  const handleClickCard = (id: number) => {
    navigate(`/artpage/${id}`);
  };
  return (
    <Container>
      <SeacrhBlock>
        <form onSubmit={formik.handleSubmit}>
          <SearchInput
            id="searchValue"
            name="searchValue"
            type="searchValue"
            onChange={(e) => handleChangeInputValue(e)}
            value={formik.values.searchValue}
            placeholder="Search art, artist, work..."
           />
        </form>
      </SeacrhBlock>
      {isLoading && formik.values.searchValue ? (
        <SearchLoader />
      ) : (
        <ListWrap>
          <ArtsList>
            {searchData.data.map((art: ArtData) => (
              <ArtTicket
                key={art.image_id}
                id={art.id}
                image={art?.thumbnail?.lqip ?? "null"}
                title={art.title}
                onClick={handleClickCard}
               />
            ))}
          </ArtsList>
        </ListWrap>
      )}
    </Container>
  );
};
