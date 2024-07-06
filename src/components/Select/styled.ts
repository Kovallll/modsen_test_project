import styled from "styled-components";

export const SelectWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  right: 30px;
  bottom: 28px;
  @media (max-width: 1400px) {
    position: static;
    margin-bottom: 16px;
    font-size: 22px;
  }
`;

export const SelectSort = styled.select`
  border-radius: 16px;
  width: 260px;
  height: 40px;
  font-size: 20px;
  padding: 0px 8px;
  margin-left: 16px;
  @media (max-width: 768px) {
    font-size: 16px;
    width: 220px;
  }
`;
