import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
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
