import {
  ArtIconButton,
  FavoriteArtPageButton,
  FavoriteArtPageIcon,
  IconWrap,
} from "./styled";
import favoritesIcon from "../../assets/icons/favorite.svg";
import favoritesAddedIcon from "../../assets/icons/favorite_added.svg";
import { addArtToFavorites } from "../../utils/addArtToFavorites";
import { useEffect, useState } from "react";
import { removeFromFavorite } from "../../utils/removeFromFavorite";

export interface FavoriteButtonProps {
  artId: number | string;
  isOnArtPage?: boolean;
}

export const FavoriteButton = ({
  artId,
  isOnArtPage = false,
}: FavoriteButtonProps) => {
  const [added, setAdded] = useState<boolean>(false);
  const favoritesData = JSON.parse(
    localStorage.getItem("favoritesData") ?? JSON.stringify([]),
  );
  useEffect(() => {
    setAdded(favoritesData.includes(artId));
  }, []);
  const handleClickFavoriteButton = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    if (!added) {
      addArtToFavorites(artId);
      setAdded(true);
    } else {
      removeFromFavorite(artId);
      setAdded(false);
    }
  };
  return (
    <>
      {isOnArtPage ? (
        <FavoriteArtPageButton
          onClick={(e) => {
            handleClickFavoriteButton(e);
          }}
        >
          {added ? (
            <FavoriteArtPageIcon src={favoritesAddedIcon}></FavoriteArtPageIcon>
          ) : (
            <FavoriteArtPageIcon src={favoritesIcon}></FavoriteArtPageIcon>
          )}
        </FavoriteArtPageButton>
      ) : (
        <IconWrap
          onClick={(e) => {
            handleClickFavoriteButton(e);
          }}
        >
          {added ? (
            <ArtIconButton src={favoritesAddedIcon}></ArtIconButton>
          ) : (
            <ArtIconButton src={favoritesIcon}></ArtIconButton>
          )}
        </IconWrap>
      )}
    </>
  );
};
