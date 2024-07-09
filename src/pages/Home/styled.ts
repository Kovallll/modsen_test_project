import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-transform: capitalize;
  text-align: center;
  color: ${({ theme }) => theme.palette?.common?.black};
  @media (max-width: 1000px) {
    font-size: 54px;
  }
  @media (max-width: 768px) {
    font-size: 44px;
  }
  @media (max-width: 600px) {
    font-size: 34px;
  }
`;

export const YellowTitle = styled.span`
  color: ${({ theme }) => theme.palette.secondary};
`;
