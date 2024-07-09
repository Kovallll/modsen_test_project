import styled from "styled-components";

export const Container = styled.div`
  display: none;
  position: relative;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30px;
  position: relative;
`;

export const Line = styled.span<{ isActive: boolean }>`
  position: relative;
  background: #fff;
  width: 40px;
  height: 4px;
  border-radius: 16px;
  transition:
    transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    opacity 0.55s ease,
    top 0.55s ease;
  &:first-child {
    transform: rotate(${({ isActive }) => (isActive ? "45deg" : "0deg")});
    top: ${({ isActive }) => (isActive ? "13px" : "0px")};
  }
  &:nth-child(3) {
    transform: rotate(${({ isActive }) => (isActive ? "135deg" : "0deg")});
    top: ${({ isActive }) => (isActive ? "-13px" : "0px")};
  }
  &:nth-child(2) {
    opacity: ${({ isActive }) => (isActive ? "0" : "1")};
  }
`;

export const Navbar = styled.div<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  position: absolute;
  background-color: #484848;
  top: 45px;
  left: -126px;
  flex-direction: column;
  width: 180px;
  padding: 8px;
  @media (max-width: 425px) {
    top: 38px;
    left: -136px;
  }
  z-index: 100;
`;

export const NavLink = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  marginBottom: "8px",
};

export const NavIcon = styled.img`
  width: 28px;
  height: 28px;
  @media (max-width: 425px) {
    width: 24px;
    height: 24px;
  }
`;

export const NavText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.palette?.common?.white};
  padding: 0 8px;
  font-size: 18px;
  @media (max-width: 425px) {
    font-size: 16px;
  }
`;
