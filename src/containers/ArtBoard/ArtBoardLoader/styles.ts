import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.margin.xl};
`;

export const TicketBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  @media ${({ theme }) => theme.media.xxl} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${({ theme }) => theme.media.lg} {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  width: 400px;
  height: 130px;
  background: #564;
  border: 1px solid #f0f1f1;
  padding: ${({ theme }) => `${theme.padding.xs} ${theme.padding.sm}`};
  animation: card-loading 2s linear infinite alternate;

  @keyframes card-loading {
    0% {
      background-color: ${({ theme }) => theme.palette?.common?.grey};
    }
    100% {
      background-color: ${({ theme }) => theme.palette?.common?.darkGrey};
    }
  }
`;
