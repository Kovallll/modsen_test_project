import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Content, Wrap } from "./styled";
import ErrorBoundary from "../ErrorBoundary";

function Root() {
  return (
    <Wrap>
      <Header />
      <Content>
        <Container>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </Container>
      </Content>
      <Footer />
    </Wrap>
  );
}

export default Root;
