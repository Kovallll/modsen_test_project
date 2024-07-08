import axios from "axios";
import { useEffect, useState } from "react";
import { artInitialData, BASE_URL } from "../../constants";
import { getArtsDataResponse } from "../../types";
import { Pagination } from "../Pagination";
import { Slider } from "../Slider";

export const SliderWithPagination = () => {
  const [{ data, config, pagination }, setArtObject] = useState(artInitialData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    async function getArts() {
      const { data } = await axios.get<getArtsDataResponse>(
        `${BASE_URL}/v1/artworks?page=${currentPage + 10}&limit=3`,
      );
      setArtObject(data);
      setIsLoading(false);
      console.log(data, "Data");
    }
    getArts();
  }, [currentPage]);

  const handleClickPaginationButton = (index: number) => {
    setCurrentPage(index);
  };
  return (
    <>
      <Slider data={data} config={config} isLoading={isLoading} />
      <Pagination
        totalPages={pagination.total_pages}
        currentPage={currentPage}
        onClickButton={handleClickPaginationButton}
      />
    </>
  );
};
