import { useEffect, useState } from "react";
import { SearchInput } from "./styled";
import axios from "axios";
import { useDebounce } from "../../hooks/use-debounce";

export const Search = () => {
  const [value, setValue] = useState<string>("");
  const [searchData, setSearchData] = useState({});
  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  console.log(searchData, "searchData");

  const debouncedValue = useDebounce(value, 500);
  console.log(debouncedValue, "debouncedValue");
  useEffect(() => {
    const getSearchData = async () => {
      const { data } = await axios.get(
        `https://api.artic.edu/api/v1/artworks/search?q=${debouncedValue}`,
      );
      setSearchData(data);
    };
    getSearchData();
  }, [debouncedValue]);

  return (
    <SearchInput
      onChange={(e) => handleChangeInputValue(e)}
      placeholder="Search art, artist, work..."
    ></SearchInput>
  );
};
