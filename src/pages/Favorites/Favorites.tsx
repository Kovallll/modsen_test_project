import { useContext } from "react";

import favoritesIcon from "src/assets/icons/favorite_title.svg";
import { BASE_URL } from "src/constants";
import { ArtBoard } from "src/containers/ArtBoard";
import { FavoriteContext } from "src/context/FavoriteContext";
import { BottomTitle, ListTitle, TitleIcon, TopTitle } from "./styled";

const Favorites = () => {
  const favoritesContext = useContext(FavoriteContext);

  return (
    <>
      <TopTitle>Here are your</TopTitle>
      <BottomTitle>
        <TitleIcon src={favoritesIcon} />
        Favorites
      </BottomTitle>
      {favoritesContext.favoriteCards.length ? (
        <ArtBoard
          response={`${BASE_URL}/v1/artworks?ids=${favoritesContext.favoriteCards.join(
            ",",
          )}`}
          title="Your favorites list"
          subtitle="Saved by you"
        />
      ) : (
        <ListTitle>You don&rsquo;t have any favorite arts</ListTitle>
      )}
    </>
  );
};

export default Favorites;
