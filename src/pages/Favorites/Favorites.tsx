import { BottomTitle, ListTitle, TitleIcon, TopTitle } from "./styled";
import favoritesIcon from "../../assets/icons/favorite_title.svg";
import { BASE_URL } from "../../constants";
import { ArtBoard } from "../../containers/ArtBoard";
const Favorites = () => {
  const favoritesData: Array<number> = JSON.parse(
    localStorage.getItem("favoritesData") ?? JSON.stringify([]),
  );
  console.log(favoritesData, "favoritesData");
  return (
    <>
      <TopTitle>Here are your</TopTitle>
      <BottomTitle>
        <TitleIcon src={favoritesIcon}></TitleIcon>Favorites
      </BottomTitle>
      {favoritesData.length ? (
        <ArtBoard
          response={`${BASE_URL}/v1/artworks?ids=${favoritesData.join(",")}`}
          title="Your favorites list"
          subtitle="Saved by you"
        ></ArtBoard>
      ) : (
        <ListTitle>You don&rsquo;t have any favorite arts</ListTitle>
      )}
    </>
  );
};

export default Favorites;
