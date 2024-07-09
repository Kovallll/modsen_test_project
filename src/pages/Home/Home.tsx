import { ArtBoard } from "../../containers/ArtBoard";
import { Search } from "../../components/Search";
import { Title, YellowTitle } from "./styled";
import { BASE_URL } from "../../constants";
import { SliderWithPagination } from "../../containers/SliderWithPagination";

function Home() {
  return (
    <>
      <Title>
        Let&rsquo;s find some <YellowTitle>art</YellowTitle>
        <br />
        here!
      </Title>
      <Search />
      <SliderWithPagination />
      <ArtBoard
        response={`${BASE_URL}/v1/artworks?limit=9`}
        title="Other works for you"
        subtitle="Here some more"
      />
    </>
  );
}

export default Home;
