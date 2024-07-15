import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import favoritesIcon from "src/assets/icons/favorite.svg";
import homeIcon from "src/assets/icons/home.svg";
import logo from "src/assets/icons/logo.svg";
import { BurgerMenu } from "src/components/BurgerMenu";
import { Paths } from "src/constants";
import {
  Container,
  Content,
  LogoImage,
  Navbar,
  NavIcon,
  NavLink,
  NavText,
} from "./styled";

export const Header = () => {
  const [path, setPath] = useState<string>(Paths.Home);
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <Container>
      <Content>
        <Link to={Paths.Home}>
          <LogoImage src={logo} alt="logo" />
        </Link>
        <Navbar>
          {path !== Paths.Home && (
            <Link to={Paths.Home} style={NavLink}>
              <NavIcon src={homeIcon} alt="nav_icon" />
              <NavText>Home</NavText>
            </Link>
          )}
          <Link to={Paths.Favorites} style={NavLink}>
            <NavIcon src={favoritesIcon} alt="nav_icon" />
            <NavText>Your favorites</NavText>
          </Link>
        </Navbar>
        <BurgerMenu path={path} />
      </Content>
    </Container>
  );
};
