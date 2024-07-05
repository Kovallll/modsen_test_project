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
  padding: 16px;
  width: 760px;
  height: 52px;
  border: 0;
  background: rgba(57, 57, 57, 0.1);
  font-size: 24px;
  padding: 0px 16px;
  color: rgb(241, 121, 0);
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
