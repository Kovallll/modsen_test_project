import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import ErrorBoundary from "src/components/ErrorBoundary";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { FavoriteContextProvider } from "src/context/FavoriteContext";
import { defaultTheme as theme } from "src/theme";
import { Container, Content, Wrap } from "./styled";

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
