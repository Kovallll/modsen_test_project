import {
  Container,
  Content,
  LogoImage,
  Navbar,
  NavIcon,
  NavLink,
  NavText,
} from "./styled";
import logo from "../../assets/icons/logo.svg";
import favoritesIcon from "../../assets/icons/favorite.svg";
import { Link, useLocation } from "react-router-dom";
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
            <Link to="/favorites" style={NavLink}>
              <NavIcon src={favoritesIcon} alt=""></NavIcon>
              <NavText>Your favorites</NavText>
            </Link>
          </Navbar>
        ) : (
          <Navbar>
            <Link to="/" style={NavLink}>
              <NavIcon src={favoritesIcon} alt=""></NavIcon>
              <NavText>Home</NavText>
            </Link>
            <Link to="/favorites" style={NavLink}>
              <NavIcon src={favoritesIcon} alt=""></NavIcon>
              <NavText>Your favorites</NavText>
            </Link>
          </Navbar>
        )}
      </Content>
    </Container>
  );
};
