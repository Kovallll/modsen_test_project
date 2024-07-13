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
  padding: ${({ theme }) => `${theme.padding.md} ${theme.padding.lg}`};
  @media ${({ theme }) => theme.media.md} {
    padding: ${({ theme }) => `${theme.padding.sm} ${theme.padding.md}`};
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
  @media ${({ theme }) => theme.media.md} {
    width: 140px;
    height: 42px;
  }
  @media ${({ theme }) => theme.media.xxs} {
    width: 120px;
    height: 36px;
  }
`;

export const Navbar = styled.div`
  display: flex;
  @media ${({ theme }) => theme.media.md} {
    display: none;
  }
`;

export const NavLink = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: "16px",
  textDecoration: "none",
};

export const NavIcon = styled.img`
  width: 24px;
  height: 24px;
  @media ${({ theme }) => theme.media.md} {
    width: 20px;
    height: 20px;
  }
  @media ${({ theme }) => theme.media.xxs} {
    width: 16px;
    height: 16px;
  }
`;

export const NavText = styled.p`
  color: ${({ theme }) => theme.palette?.common?.white};
  padding: 0;
  margin: 0;
  padding-left: ${({ theme }) => theme.padding.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
