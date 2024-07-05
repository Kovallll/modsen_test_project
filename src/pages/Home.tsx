import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Content, Wrap, Container } from "./styles";
import { Slider } from "../containers/Slider";
import { ArtBoard } from "../containers/ArtBoard";

function Home() {
  return (
    <Wrap>
      <Header></Header>
      <Content>
        <Container>
          <Slider></Slider>
          <ArtBoard></ArtBoard>
        </Container>
      </Content>
      <Footer></Footer>
    </Wrap>
  );
}

export default Home;
