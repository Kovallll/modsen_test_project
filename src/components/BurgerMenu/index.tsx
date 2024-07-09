import { useState } from "react";
import {
  Container,
  Line,
  Menu,
  Navbar,
  NavIcon,
  NavLink,
  NavText,
} from "./styled";
import { Link } from "react-router-dom";
import favoritesIcon from "../../assets/icons/favorite.svg";
import homeIcon from "../../assets/icons/home.svg";
import { Paths } from "../../constants";

export interface BurgerMenuProps {
  path: string;
}

export const BurgerMenu = ({ path }: BurgerMenuProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClickBurgerMenu = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <Container>
      <Menu onClick={handleClickBurgerMenu}>
        <Line isActive={isActive} />
        <Line isActive={isActive} />
        <Line isActive={isActive} />
      </Menu>
      <Navbar isActive={isActive}>
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
    </Container>
  );
};
