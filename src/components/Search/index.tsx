import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

import notImage from "src/assets/icons/not_image.svg";
import { ArtTicket } from "src/components/ArtTicket";
import { BASE_URL, Paths, searchInitialData } from "src/constants";
import { FavoriteContext } from "src/context/FavoriteContext";
import { ArtData, getSearchDataResponse } from "src/types";
import { debounce } from "src/utils";
import { SearchLoader } from "./SearchLoader";
import {
  ArtsList,
  Container,
  ErrorText,
  ListWrap,
  SearchBlock,
  SearchInput,
} from "./styled";

export interface MyFormValues {
  searchValue: string;
}

const validationSchema = Yup.object({
  searchValue: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .matches(/[A-Za-z0-9]/, "Can include numbers and letters"),
});

export const Search = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState(searchInitialData);
  const formik = useFormik<MyFormValues>({
    initialValues: {
      searchValue: "",
    },
    validationSchema,
    onSubmit: ({ searchValue }) => {
      setIsLoading(true);
      const getSearchData = async () => {
        try {
          const { data } = await axios.get<getSearchDataResponse>(
            `${BASE_URL}/v1/artworks/search?q=${searchValue}&limit=5`,
          );
          setSearchData(data);
          setIsLoading(false);
        } catch (err) {
          console.error(err);
        }
      };
      getSearchData();
    },
  });

  const debouncedSubmit = debounce(formik.submitForm, 1000);

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("searchValue", e.target.value, true);
    debouncedSubmit();
  };

  const handleClickCard = (id: string) => {
    navigate(`${Paths.ArtPage}/${id}`);
  };

  const { favoriteCards, addFavoriteCards, removeFavoriteCards } =
    useContext(FavoriteContext);

  const getIsAdded = (id: string) => {
    return favoriteCards.includes(id);
  };

  const handleClickFavoriteButton =
    (id: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();

      if (!getIsAdded(id)) {
        addFavoriteCards(id);
      } else {
        removeFavoriteCards(id);
      }
    };

  return (
    <Container>
      <SearchBlock>
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
      </SearchBlock>
      {formik.isValid && formik.values.searchValue !== "" && (
        <>
          {isLoading ? (
            <SearchLoader />
          ) : (
            <ListWrap>
              <ArtsList>
                {searchData.data.map((art: ArtData) => (
                  <ArtTicket
                    key={art.image_id}
                    id={String(art.id)}
                    image={art?.thumbnail?.lqip ?? notImage}
                    title={art.title}
                    onClick={handleClickCard}
                    onClickFavoriteButton={handleClickFavoriteButton(
                      String(art.id),
                    )}
                    isAdded={getIsAdded(art.id.toString())}
                  />
                ))}
              </ArtsList>
            </ListWrap>
          )}
        </>
      )}
      <ErrorText>
        {formik.touched.searchValue && formik.errors.searchValue}
      </ErrorText>
    </Container>
  );
};
