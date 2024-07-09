import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Content, Wrap } from "./styled";
import ErrorBoundary from "../ErrorBoundary";
import { FavoriteContextProvider } from "../../context/FavoriteContext";
import { ThemeProvider } from "styled-components";
import { defaultTheme as theme } from "../../theme";
function Root() {
  return (
    <ThemeProvider theme={theme}>
      <Wrap>
        <Header />
        <Content>
          <Container>
            <ErrorBoundary>
              <FavoriteContextProvider>
                <Outlet />
              </FavoriteContextProvider>
            </ErrorBoundary>
          </Container>
        </Content>
        <Footer />
      </Wrap>
    </ThemeProvider>
  );
}

export default Root;
