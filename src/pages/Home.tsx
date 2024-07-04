import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Content, Wrap, Container } from "./styles";
import { Slider } from "../components/Slider";

function Home() {
  return (
    <Wrap>
      <Header></Header>
      <Content>
        <Container>
          <Slider></Slider>
        </Container>
      </Content>
      <Footer></Footer>
    </Wrap>
  );
}

export default Home;
