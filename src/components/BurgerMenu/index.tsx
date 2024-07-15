import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import favoritesIcon from "src/assets/icons/favorite.svg";
import homeIcon from "src/assets/icons/home.svg";
import { Paths } from "src/constants";
import { useClickOutside } from "src/hooks/use-click-outside";
import {
  Container,
  Line,
  Menu,
  Navbar,
  NavIcon,
  NavLink,
  NavText,
} from "./styled";

export interface BurgerMenuProps {
  path: string;
}

export const BurgerMenu = ({ path }: BurgerMenuProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const burgerRef = useRef(null);

  const handleClickBurgerMenu = () => {
    setIsActive((prev) => !prev);
  };

  useClickOutside(burgerRef, () => {
    setIsActive(false);
  });
  return (
    <Container>
      <Menu onClick={handleClickBurgerMenu} ref={burgerRef}>
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
