import { ThemeProvider } from "styled-components";

import { defaultTheme as theme } from "src/theme";
import { FavoritePageButton } from ".";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("FavoritePageButton", () => {
  it("renders FavoritePageButton component", () => {
    const onClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <FavoritePageButton icon="" onClick={onClick} key="" />
      </ThemeProvider>,
    );
    screen.debug();
  });
});
