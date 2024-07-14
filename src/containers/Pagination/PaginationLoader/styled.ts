import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.margin.xs};

  @media ${({ theme }) => theme.media.xxl} {
    justify-content: center;
  }
`;

export const Pagination = styled.div`
  width: 250px;
  height: 40px;
  animation: art-loading 2s linear infinite alternate;

  @keyframes art-loading {
    0% {
      background-color: ${({ theme }) => theme.palette?.common?.grey};
    }
    100% {
      background-color: ${({ theme }) => theme.palette?.common?.darkGrey};
    }
  }
`;
