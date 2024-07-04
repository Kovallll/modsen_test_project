import { ArtCard } from "../components/ArtCard";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Wrap } from "./styles";
import image from "../assets/1.jpg";

function Home() {
  return (
    <Wrap>
      <Header></Header>
      <div style={{ display: "flex", flex: "1 0 auto" }}>
        <ArtCard
          image={image}
          text="Public"
          title="Charles V, bust length, holding a sword, facing right"
          subtitle="Giovanni Britto"
        ></ArtCard>
      </div>
      <Footer></Footer>
    </Wrap>
  );
}

export default Home;
