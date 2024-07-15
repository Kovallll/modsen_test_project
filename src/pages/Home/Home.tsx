import { BASE_URL } from "src/constants";
import { ArtBoard } from "src/containers/ArtBoard";
import { Search } from "src/containers/Search";
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
        response={`${BASE_URL}?limit=9`}
        title="Other works for you"
        subtitle="Here some more"
      />
    </>
  );
}

export default Home;
