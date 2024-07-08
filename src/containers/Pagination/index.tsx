import {
  ArrowIcon,
  Container,
  NextButton,
  PageButton,
  PrevButton,
  Wrap,
} from "./styled";
import arrowNextIcon from "../../assets/icons/next_arrow.svg";
import arrowPrevIcon from "../../assets/icons/prev_arrow.svg";
import { useState } from "react";

export interface PaginationProps {
  currentPage: number;
  onClickButton: (index: number) => void;
  totalPages: number;
}

export const Pagination = ({
  currentPage,
  onClickButton,
  totalPages,
}: PaginationProps) => {
  const [xPosition, setXPosition] = useState(0);
  const [index, setIndex] = useState(0);

  const handleClickPaginationButton = (index: number) => () => {
    onClickButton(index);
  };

  const handleClickNextButton = () => {
    if (index !== totalPages - 4) {
      setXPosition(xPosition - 40);
      setIndex(index + 1);
    }
  };

  const handleClickPrevButton = () => {
    if (index !== 0) {
      setXPosition(xPosition + 40);
      setIndex(index - 1);
    }
  };
  const total = Math.floor(totalPages / 100);
  const paginationCount = [...Array(total).keys()];
  return (
    <Wrap>
      <PrevButton onClick={handleClickPrevButton}>
        <ArrowIcon src={arrowPrevIcon} />
      </PrevButton>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Container style={{ transform: `translateX(${xPosition}px)` }}>
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
      </div>
      <NextButton onClick={handleClickNextButton}>
        <ArrowIcon src={arrowNextIcon} />
      </NextButton>
    </Wrap>
  );
};
