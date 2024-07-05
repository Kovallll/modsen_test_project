import { ArtIconButton, IconWrap } from "./styled";
import favoritesIcon from "../../assets/icons/favorite.svg";

export const FavoriteButton = () => {
  return (
    <IconWrap>
      <ArtIconButton src={favoritesIcon}></ArtIconButton>
    </IconWrap>
  );
};
