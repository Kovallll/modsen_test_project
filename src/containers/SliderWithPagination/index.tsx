import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import { artInitialData, BASE_URL } from "src/constants";
import { Pagination } from "src/containers/Pagination";
import { Slider } from "src/containers/Slider";
import { getArtsDataResponse } from "src/types";

export const SliderWithPagination = () => {
  const [{ data, config, pagination }, setArtObject] = useState(artInitialData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    async function getArts() {
      try {
        const { data } = await axios.get<getArtsDataResponse>(
          `${BASE_URL}?page=${currentPage + 10}&limit=3`,
        );
        setArtObject(data);
        setIsLoading(false);
      } catch (error) {
        toast.error("Error receiving data!");
      }
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
        isLoading={isLoading}
        totalPages={pagination.total_pages}
        currentPage={currentPage}
        onClickButton={handleClickPaginationButton}
      />
    </>
  );
};
