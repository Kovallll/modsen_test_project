import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  @media ${({ theme }) => theme.media.xxl} {
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.margin.lg};
  }
`;

export const Box = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "xPosition",
})<{ xPosition: number }>`
  display: flex;
  align-items: center;
  width: 150px;
  transition: transform 0.6s ease-in-out;
  transform: translateX(${({ xPosition }) => `${xPosition}px`});
`;

export const PageButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.palette?.secondary : theme.palette?.common?.white};
  color: ${({ isActive, theme }) =>
    isActive ? theme.palette?.common?.white : theme.palette?.common?.black};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  height: 30px;
  min-width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }) => theme.margin.sm};
  border-radius: 4px;
  border: 0;
  cursor: pointer;
`;

export const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${({ theme }) => theme.margin.md};
  background-color: ${({ theme }) => theme.palette?.common?.white};
  border: 0;
  cursor: pointer;
`;

export const PrevButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }) => theme.margin.md};
  background-color: ${({ theme }) => theme.palette?.common?.white};
  border: 0;
  cursor: pointer;
`;

export const ArrowIcon = styled.img`
  height: 24px;
  width: 24px;
`;
