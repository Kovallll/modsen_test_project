import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { Content, Wrap, Container, HomeTitle } from "./styles";
import { Search } from "../components/Search";
import { Slider } from "../containers/Slider";
import { ArtBoard } from "../containers/ArtBoard";

function Home() {
  return (
    <Wrap>
      <Header></Header>
      <Content>
        <Container>
          <HomeTitle>
            Let&rsquo;s find some <span style={{ color: "#f17900" }}>art</span>
            <br></br>
            here!
          </HomeTitle>
          <Search></Search>
          <Slider></Slider>
          <ArtBoard></ArtBoard>
        </Container>
      </Content>
      <Footer></Footer>
    </Wrap>
  );
}

export default Home;
