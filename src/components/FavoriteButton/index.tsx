import { ArtIconButton, IconWrap } from "./styled";
import favoritesIcon from "../../assets/icons/favorite.svg";

export const FavoriteButton = () => {
  const handleClickFavoriteButton = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
  };
  return (
    <IconWrap
      onClick={(e) => {
        handleClickFavoriteButton(e);
      }}
    >
      <ArtIconButton src={favoritesIcon}></ArtIconButton>
    </IconWrap>
  );
};
