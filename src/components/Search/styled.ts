import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SeacrhBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 30px;
`;

export const SearchInput = styled.input`
  border-radius: 16px;
  width: 760px;
  height: 52px;
  border: 0;
  background: rgba(57, 57, 57, 0.1);
  font-size: 24px;
  padding: 0px 16px;
  color: rgb(241, 121, 0);
  @media (max-width: 1000px) {
    width: 600px;
    height: 44px;
    font-size: 20px;
    padding: 0px 12px;
  }
  @media (max-width: 768px) {
    width: 500px;
    height: 38px;
    font-size: 18px;
    padding: 0px 8px;
  }
  @media (max-width: 600px) {
    width: 440px;
    height: 34px;
    font-size: 16px;
    padding: 0px 6px;
  }
  @media (max-width: 500px) {
    width: 360px;
    height: 30px;
    font-size: 14px;
    padding: 0px 4px;
  }
`;

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
