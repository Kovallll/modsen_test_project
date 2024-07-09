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
import homeIcon from "../../assets/icons/home.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BurgerMenu } from "../BurgerMenu";
import { Paths } from "../../constants";
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
