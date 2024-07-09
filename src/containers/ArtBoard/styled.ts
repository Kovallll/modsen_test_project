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

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
  @media (max-width: 1400px) {
    flex-direction: column;
  }
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.palette?.common?.black};
  margin-bottom: 32px;
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.palette.primary};
`;
