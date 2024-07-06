import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px;
  width: 100%;
  padding: 0 10px;
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 32px;
  color: #393939;
  margin-bottom: 32px;
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #e0a449;
`;

export const CardsWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;

export const PaginationLoader = styled.div``;

export const Card = styled.div`
  height: 500px;
  width: 390px;
  animation: card-loading 2s linear infinite alternate;

  @keyframes card-loading {
    0% {
      background-color: rgba(57, 57, 57, 0.1);
    }
    100% {
      background-color: rgba(57, 57, 57, 0.4);
    }
  }
`;
