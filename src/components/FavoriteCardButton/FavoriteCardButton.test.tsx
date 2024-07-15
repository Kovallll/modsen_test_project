import { ThemeProvider } from "styled-components";

import { defaultTheme as theme } from "src/theme";
import { FavoriteCardButton } from ".";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("FavoriteCardButton", () => {
  it("renders FavoriteCardButton component", () => {
    const onClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <FavoriteCardButton icon="" onClick={onClick} key="" />
      </ThemeProvider>,
    );
    screen.debug();
  });
});
