import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Content, Wrap, Container, HomeTitle } from "./styles";
import { Slider } from "../components/Slider";
import { Search } from "../components/Search";

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
        </Container>
      </Content>
      <Footer></Footer>
    </Wrap>
  );
}

export default Home;
