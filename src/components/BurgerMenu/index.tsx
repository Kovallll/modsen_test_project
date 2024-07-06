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

export interface BurgerMenuProps {
  path: string;
}

export const BurgerMenu = ({ path }: BurgerMenuProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <Container>
      <Menu
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
      >
        <Line isActive={isActive} />
        <Line isActive={isActive} />
        <Line isActive={isActive} />
      </Menu>
      {path === "/" ? (
        <Navbar isActive={isActive}>
          <Link to="/favorites" style={NavLink}>
            <NavIcon src={favoritesIcon} alt=""></NavIcon>
            <NavText>Your favorites</NavText>
          </Link>
        </Navbar>
      ) : (
        <Navbar isActive={isActive}>
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
    </Container>
  );
};
