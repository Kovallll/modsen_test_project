import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `${theme.padding.xl} ${theme.padding.md}`};
  @media ${({ theme }) => theme.media.xl} {
    flex-direction: column;
  }
`;

export const Image = styled.div`
  width: 500px;
  height: 580px;
  margin-right: 60px;
  position: relative;
  animation: art-loading 2s linear infinite alternate;

  @keyframes art-loading {
    0% {
      background-color: ${({ theme }) => theme.palette?.common?.grey};
    }
    100% {
      background-color: ${({ theme }) => theme.palette?.common?.darkGrey};
    }
  }
  @media ${({ theme }) => theme.media.xl} {
    margin-right: 0px;
    margin-bottom: 30px;
    width: 480px;
    height: 560px;
  }
`;

export const ArtNote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 580px;
  @media ${({ theme }) => theme.media.xl} {
    height: 550px;
  }
  @media ${({ theme }) => theme.media.md} {
    height: 520px;
  }
  @media ${({ theme }) => theme.media.sm} {
    height: 480px;
  }
`;

export const ArtInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100%;
`;

export const ArtOverview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100%;
`;

export const InfoText = styled.p`
  width: 300px;
  height: 12px;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0px;
  }
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

export const OverviewText = styled.p`
  width: 300px;
  height: 6px;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0px;
  }
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
