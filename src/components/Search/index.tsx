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
import { ArtData } from "../../containers/Slider";
import { BASE_URL } from "../../constants";
import { useFormik } from "formik";
import * as Yup from "yup";
import { debounce } from "../../utils/debounce";

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
      console.log(searchValue, "searchValue");
      const getSearchData = async () => {
        const { data } = await axios.get(
          `${BASE_URL}/v1/artworks/search?q=${searchValue}&limit=5`,
        );
        setSearchData(data);
      };
      getSearchData();
    },
  });
  const debauncedSubmit = useCallback(debounce(formik.submitForm, 1000), []);
  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("searchValue", e.target.value, true);
    debauncedSubmit();
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
          ></SearchInput>
        </form>
      </SeacrhBlock>
      <ListWrap>
        <ArtsList>
          {formik.values.searchValue &&
            searchData.data.map((art: ArtData) => (
              <ArtTicket
                key={art.image_id}
                image={art?.thumbnail?.lqip ?? "null"}
                title={art.title}
              ></ArtTicket>
            ))}
        </ArtsList>
      </ListWrap>
    </Container>
  );
};
