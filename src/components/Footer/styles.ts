import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  padding: 16px 40px;
  @media (max-width: 768px) {
    padding: 8px 30px;
  }
  @media (max-width: 425px) {
    padding: 4px 20px;
  }
  background-color: #fff;
`;

export const Content = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterImage = styled.img`
  width: 200px;
  height: 80px;
  @media (max-width: 768px) {
    width: 140px;
    height: 42px;
  }
  @media (max-width: 425px) {
    width: 120px;
    height: 36px;
  }
`;
