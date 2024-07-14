import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { FavoriteContextProvider } from "src/context/FavoriteContext";
import { Container, Content, Wrap } from "./styled";

import "react-toastify/dist/ReactToastify.css";

function Root() {
  return (
    <Wrap>
      <Header />
      <ToastContainer />
      <Content>
        <Container>
          <FavoriteContextProvider>
            <Outlet />
          </FavoriteContextProvider>
        </Container>
      </Content>
      <Footer />
    </Wrap>
  );
}

export default Root;
