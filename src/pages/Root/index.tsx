import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Content, Wrap, Container } from "./styled";
import ErrorBoundary from "../ErrorBoundary";

function Root() {
  return (
    <ErrorBoundary>
      <Wrap>
        <Header></Header>
        <Content>
          <Container>
            <Outlet />
          </Container>
        </Content>
        <Footer></Footer>
      </Wrap>
    </ErrorBoundary>
  );
}

export default Root;
