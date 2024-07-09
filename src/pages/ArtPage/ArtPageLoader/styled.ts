import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 60px 20px;
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
      background-color: rgba(57, 57, 57, 0.1);
    }
    100% {
      background-color: rgba(57, 57, 57, 0.4);
    }
  }
  @media (max-width: 1200px) {
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
  @media (max-width: 1200px) {
    height: 550px;
  }
  @media (max-width: 768px) {
    height: 520px;
  }
  @media (max-width: 670px) {
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
      background-color: rgba(57, 57, 57, 0.1);
    }
    100% {
      background-color: rgba(57, 57, 57, 0.4);
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
      background-color: rgba(57, 57, 57, 0.1);
    }
    100% {
      background-color: rgba(57, 57, 57, 0.4);
    }
  }
`;
