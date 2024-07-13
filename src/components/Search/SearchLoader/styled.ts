import styled from "styled-components";

export const ListWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ArtsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 120px;
  padding-bottom: ${({ theme }) => theme.padding.md};
  position: absolute;
  background-color: ${({ theme }) => theme.palette?.common?.white};
  z-index: 100;
`;

export const Art = styled.div`
  width: 400px;
  height: 100px;
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
