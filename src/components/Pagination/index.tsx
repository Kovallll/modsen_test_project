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
}

export const Pagination = ({ currentPage, onClickButton }: PaginationProps) => {
  const [xPosition, setXPosition] = useState(0);
  const [index, setIndex] = useState(0);
  const paginationCountArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleClickPaginationButton = (index: number) => () => {
    onClickButton(index);
  };

  const handleClickNextButton = () => {
    if (index !== 6) {
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
  return (
    <Wrap>
      <PrevButton onClick={handleClickPrevButton}>
        <ArrowIcon src={arrowPrevIcon}></ArrowIcon>
      </PrevButton>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Container style={{ transform: `translateX(${xPosition}px)` }}>
          {paginationCountArray.map((number, index) => {
            if (index + 1 === currentPage) {
              return (
                <PageButton
                  key={number}
                  active
                  onClick={handleClickPaginationButton(index + 1)}
                >
                  {number}
                </PageButton>
              );
            } else
              return (
                <PageButton
                  key={number}
                  onClick={handleClickPaginationButton(index + 1)}
                >
                  {number}
                </PageButton>
              );
          })}
        </Container>
      </div>
      <NextButton onClick={handleClickNextButton}>
        <ArrowIcon src={arrowNextIcon}></ArrowIcon>
      </NextButton>
    </Wrap>
  );
};
