import { useState } from "react";

import arrowNextIcon from "src/assets/icons/next_arrow.svg";
import arrowPrevIcon from "src/assets/icons/prev_arrow.svg";
import { paginationVisibleCount, paginationWidth } from "src/constants";
import { PaginationLoader } from "./PaginationLoader";
import {
  ArrowIcon,
  Box,
  Container,
  NextButton,
  PageButton,
  PrevButton,
  Wrap,
} from "./styled";

export interface PaginationProps {
  currentPage: number;
  onClickButton: (index: number) => void;
  totalPages: number;
  isLoading: boolean;
}

export const Pagination = ({
  currentPage,
  onClickButton,
  totalPages,
  isLoading,
}: PaginationProps) => {
  const [xPosition, setXPosition] = useState(0);
  const [index, setIndex] = useState(0);
  const handleClickPaginationButton = (index: number) => () => {
    onClickButton(index);
  };

  const handleClickNextButton = () => {
    if (index !== totalPages - paginationVisibleCount) {
      setXPosition(xPosition - paginationWidth);
      setIndex(index + 1);
    }
  };

  const handleClickPrevButton = () => {
    if (index !== 0) {
      setXPosition(xPosition + paginationWidth);
      setIndex(index - 1);
    }
  };
  const total = Math.floor(totalPages / 100);
  const paginationCount = [...Array(total).keys()];
  if (isLoading) {
    return <PaginationLoader />;
  }
  return (
    <Wrap>
      <PrevButton onClick={handleClickPrevButton}>
        <ArrowIcon src={arrowPrevIcon} />
      </PrevButton>
      <Box>
        <Container xPosition={xPosition}>
          {paginationCount.map((number, index) => {
            if (index + 1 === currentPage) {
              return (
                <PageButton
                  key={number}
                  active={true}
                  onClick={handleClickPaginationButton(index + 1)}
                >
                  {number + 1}
                </PageButton>
              );
            } else
              return (
                <PageButton
                  key={number}
                  active={false}
                  onClick={handleClickPaginationButton(index + 1)}
                >
                  {number + 1}
                </PageButton>
              );
          })}
        </Container>
      </Box>
      <NextButton onClick={handleClickNextButton}>
        <ArrowIcon src={arrowNextIcon} />
      </NextButton>
    </Wrap>
  );
};
