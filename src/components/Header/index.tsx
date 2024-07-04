import {
  Container,
  Content,
  LogoImage,
  Navbar,
  NavIcon,
  NavLink,
  NavText,
} from "./styles";
import logo from "../../assets/icons/logo.svg";
import favoritesIcon from "../../assets/icons/favorite.svg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export const Header = () => {
  const [path, setPath] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <Container>
      <Content>
        <a href="/">
          <LogoImage src={logo} alt=""></LogoImage>
        </a>
        {path === "/" ? (
          <Navbar>
            <NavLink href="/favorites">
              <NavIcon src={favoritesIcon} alt=""></NavIcon>
              <NavText>Your favorites</NavText>
            </NavLink>
          </Navbar>
        ) : (
          <Navbar>
            <NavLink href="/">
              <NavIcon src={favoritesIcon} alt=""></NavIcon>
              <NavText>Home</NavText>
            </NavLink>
            <NavLink href="/favorites">
              <NavIcon src={favoritesIcon} alt=""></NavIcon>
              <NavText>Your favorites</NavText>
            </NavLink>
          </Navbar>
        )}
      </Content>
    </Container>
  );
};
