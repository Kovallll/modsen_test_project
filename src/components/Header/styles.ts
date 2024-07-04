import styled from "styled-components";

export const Container = styled.header`
  background: linear-gradient(
    90deg,
    #343333 16.73%,
    #484848 58.63%,
    #282828 98.63%
  );
  display: flex;
  justify-content: center;
  padding: 16px 40px;
  @media (max-width: 768px) {
    padding: 8px 30px;
  }
  @media (max-width: 425px) {
    padding: 4px 20px;
  }
`;

export const Content = styled.nav`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImage = styled.img`
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

export const Navbar = styled.div`
  display: flex;
`;

export const NavLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 16px;
  text-decoration: none;
`;

export const NavIcon = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 425px) {
    width: 16px;
    height: 16px;
  }
`;

export const NavText = styled.p`
  color: #ffffff;
  padding: 0;
  margin: 0;
  padding-left: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;
