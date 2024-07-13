import { Search } from "src/components/Search";
import { BASE_URL } from "src/constants";
import { ArtBoard } from "src/containers/ArtBoard";
import { SliderWithPagination } from "src/containers/SliderWithPagination";
import { Title, YellowTitle } from "./styled";

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
