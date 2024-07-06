import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 64px;
  text-transform: capitalize;
  text-align: center;
  color: #393939;
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
