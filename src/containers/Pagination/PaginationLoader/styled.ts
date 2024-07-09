import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  margin-bottom: 4px;

  @media (max-width: 1440px) {
    justify-content: center;
  }
`;

export const Pagination = styled.div`
  width: 250px;
  height: 40px;
  animation: art-loading 2s linear infinite alternate;

  @keyframes art-loading {
    0% {
      background-color: rgba(57, 57, 57, 0.1);
    }
    100% {
      background-color: rgba(57, 57, 57, 0.4);
    }
  }
`;
