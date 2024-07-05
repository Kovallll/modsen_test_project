import { Slider } from "../../containers/Slider";
import { ArtBoard } from "../../containers/ArtBoard";
import { Search } from "../../components/Search";
import { Title } from "./styled";

function Home() {
  return (
    <>
      <Title>
        Let&rsquo;s find some <span style={{ color: "#f17900" }}>art</span>
        <br></br>
        here!
      </Title>
      <Search></Search>
      <Slider></Slider>
      <ArtBoard></ArtBoard>
    </>
  );
}

export default Home;
