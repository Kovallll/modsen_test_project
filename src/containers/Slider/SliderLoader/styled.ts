import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ theme }) => `${theme.margin.lg} 0`};
  width: 100%;
  padding: ${({ theme }) => `0 ${theme.padding.sm}`};
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.palette?.common?.black};
  margin-bottom: ${({ theme }) => theme.margin.lg};
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.palette.primary};
`;

export const CardsWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.margin.lg};
  @media ${({ theme }) => theme.media.xxl} {
    flex-direction: column;
  }
`;

export const PaginationLoader = styled.div``;

export const Card = styled.div`
  height: 500px;
  width: 390px;
  animation: card-loading 2s linear infinite alternate;
  margin-bottom: ${({ theme }) => theme.margin.md};

  @keyframes card-loading {
    0% {
      background-color: ${({ theme }) => theme.palette?.common?.grey};
    }
    100% {
      background-color: ${({ theme }) => theme.palette?.common?.darkGrey};
    }
  }
  @media ${({ theme }) => theme.media.xxl} {
    flex-direction: column;
  }
`;
