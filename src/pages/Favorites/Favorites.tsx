import {
  BottomTitle,
  ListSubtitle,
  ListTitle,
  TitleIcon,
  TopTitle,
} from "./styled";
import favoritesIcon from "../../assets/icons/favorite_title.svg";
import { BASE_URL } from "../../constants";
import { ArtTicketBox } from "../../components/ArtTicketBox";
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
      <ListSubtitle>Saved by you</ListSubtitle>
      <ListTitle>Your favorites list</ListTitle>
      {favoritesData.length ? (
        <ArtTicketBox
          response={`${BASE_URL}/v1/artworks?ids=${favoritesData.join(",")}`}
        ></ArtTicketBox>
      ) : (
        <ListTitle>You don&rsquo;t have any favorite arts</ListTitle>
      )}
    </>
  );
};

export default Favorites;
