import { useEffect, useState } from "react";
import { getArtsDataResponse } from "../../types";
import { SelectWrap, SelectSort } from "./styled";

export interface SelectProps {
  dataSort: getArtsDataResponse;
  setDataSort: (obj: any) => void;
}

export const Select = ({ dataSort, setDataSort }: SelectProps) => {
  const [selectSortData, setSelectSortData] = useState<string>("");

  const selectSort = (key: string) => {
    switch (key) {
      case "ascendingYear": {
        sortByYear();
        break;
      }
      case "decreasingYear": {
        sortByYear(true);
        break;
      }
      case "ascendingName": {
        sortByName();
        break;
      }
      case "decreasingName": {
        sortByName(true);
        break;
      }
      default: {
        break;
      }
    }
  };

  const sortByYear = (decreasing?: boolean) => {
    const sortedArts = dataSort.data.sort((a, b) => {
      return (a.date_start || Infinity) - (b.date_start || Infinity);
    });
    setDataSort({
      ...dataSort,
      data: decreasing ? sortedArts.reverse() : sortedArts,
    });
  };

  const sortByName = (decreasing?: boolean) => {
    const sortedArts = dataSort.data.sort((a, b) =>
      a.title.localeCompare(b.title),
    );
    setDataSort({
      ...dataSort,
      data: decreasing ? sortedArts.reverse() : sortedArts,
    });
  };

  const handleClickSort = (data: string) => {
    setSelectSortData(data);
  };
  useEffect(() => {
    selectSort(selectSortData);
  }, [selectSortData]);
  return (
    <SelectWrap>
      <label htmlFor="">Sort by:</label>
      <SelectSort
        onChange={(e) => {
          handleClickSort(e.target.value);
        }}
      >
        <option value="none">None</option>
        <option value="ascendingYear">Ascending order year</option>
        <option value="decreasingYear">Decreasing order year</option>
        <option value="ascendingName">Ascending order name</option>
        <option value="decreasingName">Decreasing order name</option>
      </SelectSort>
    </SelectWrap>
  );
};
