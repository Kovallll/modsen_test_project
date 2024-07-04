import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  @media (max-width: 1440px) {
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  transition: transform 0.6s ease-in-out;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? "#f17900" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  font-weight: 600;
  font-size: 18px;
  height: 30px;
  min-width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 4px;
  border: 0;
`;

export const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  background-color: #fff;
  border: 0;
  cursor: pointer;
`;

export const PrevButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  background-color: #fff;
  border: 0;
  cursor: pointer;
`;

export const ArrowIcon = styled.img`
  height: 24px;
  width: 24px;
`;
