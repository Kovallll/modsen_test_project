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
  padding-bottom: 20px;
  position: absolute;
  background-color: #fff;
  z-index: 100;
`;

export const Art = styled.div`
  width: 400px;
  height: 100px;
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
