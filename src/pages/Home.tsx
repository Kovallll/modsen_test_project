import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Wrap } from "./styles";

function Home() {
  return (
    <Wrap>
      <Header></Header>
      <div style={{ display: "flex", flex: "1 0 auto" }}></div>
      <Footer></Footer>
    </Wrap>
  );
}

export default Home;
