import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;

export const TicketBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  width: 400px;
  height: 130px;
  background: #564;
  border: 1px solid #f0f1f1;
  padding: 4px 8px;
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
