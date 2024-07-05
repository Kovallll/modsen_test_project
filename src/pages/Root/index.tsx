import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Content, Wrap, Container } from "./styled";

function Root() {
  return (
    <Wrap>
      <Header></Header>
      <Content>
        <Container>
          <Outlet />
        </Container>
      </Content>
      <Footer></Footer>
    </Wrap>
  );
}

export default Root;
