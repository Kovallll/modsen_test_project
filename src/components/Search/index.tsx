import { useEffect, useState } from "react";
import {
  ArtsList,
  Container,
  SeacrhBlock,
  SearchButton,
  SearchInput,
} from "./styled";
import axios from "axios";
import { useDebounce } from "../../hooks/use-debounce";
import { ArtTicket } from "../ArtTicket";
import { ArtData } from "../../containers/Slider";
import { BASE_URL } from "../../constants";
import { useFormik } from "formik";

export const Search = () => {
  const [value, setValue] = useState<string>("");
  const [searchData, setSearchData] = useState({
    data: [],
    config: { iiif_url: "" },
  });
  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  console.log(searchData, "searchData");

  const debouncedValue = useDebounce(value, 500);
  console.log(debouncedValue, "debouncedValue");
  useEffect(() => {
    const getSearchData = async () => {
      if (debouncedValue !== "") {
        const { data } = await axios.get(
          `${BASE_URL}/v1/artworks/search?q=${debouncedValue}&limit=6`,
        );
        setSearchData(data);
      }
    };
    getSearchData();
  }, [debouncedValue]);

  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {
      console.log("subm");
    },
  });
  return (
    <Container>
      <SeacrhBlock>
        <form onSubmit={formik.handleSubmit}>
          <SearchInput
            id="search"
            name="search"
            type="search"
            onChange={(e) => handleChangeInputValue(e)}
            placeholder="Search art, artist, work..."
          ></SearchInput>
          <SearchButton type="submit">See more</SearchButton>
        </form>
      </SeacrhBlock>
      <ArtsList>
        {debouncedValue &&
          searchData.data.map((art: ArtData) => (
            <ArtTicket
              key={art.image_id}
              image={art?.thumbnail?.lqip ?? "null"}
              title={art.title}
            ></ArtTicket>
          ))}
      </ArtsList>
    </Container>
  );
};
