import { FavoriteArtPageButton, FavoriteArtPageIcon } from "./styled";
import favoritesIcon from "../../assets/icons/favorite.svg";
import favoritesisAddedIcon from "../../assets/icons/favorite_added.svg";
import { addArtToFavorites } from "../../utils";
import { useEffect, useState } from "react";
import { removeFromFavorite } from "../../utils";

export interface FavoriteButtonProps {
  artId: number | string;
}

export const FavoriteButton = ({ artId }: FavoriteButtonProps) => {
  const [isAdded, setIsAdded] = useState<boolean>(false);

  useEffect(() => {
    const favoritesData = JSON.parse(
      localStorage.getItem("favoritesData") ?? JSON.stringify([]),
    );
    setIsAdded(favoritesData.includes(artId));
  }, []);
  const handleClickFavoriteButton = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    if (!isAdded) {
      addArtToFavorites(artId);
      setIsAdded(true);
    } else {
      removeFromFavorite(artId);
      setIsAdded(false);
    }
  };
  return (
    <FavoriteArtPageButton>
      {isAdded ? (
        <FavoriteArtPageIcon
          src={favoritesisAddedIcon}
          onClick={(e) => {
            handleClickFavoriteButton(e);
          }}
        />
      ) : (
        <FavoriteArtPageIcon
          src={favoritesIcon}
          onClick={(e) => {
            handleClickFavoriteButton(e);
          }}
        />
      )}
    </FavoriteArtPageButton>
  );
};
