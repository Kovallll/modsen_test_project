import { ThemeProvider } from "styled-components";

import { defaultTheme as theme } from "src/theme";
import ArtTicket from ".";

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("ArtTicket", () => {
  it("renders ArtTicket component", () => {
    const onClick = jest.fn();
    const onClickFavoriteButton = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <ArtTicket
          image=""
          id=""
          isAdded
          onClick={onClick}
          onClickFavoriteButton={onClickFavoriteButton}
          title=""
          key=""
        />
      </ThemeProvider>,
    );

    screen.debug();
  });

  it("check FavoriteButton click", () => {
    const onClick = jest.fn();
    const onClickFavoriteButton = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <ArtTicket
          image=""
          id=""
          isAdded
          onClick={onClick}
          onClickFavoriteButton={onClickFavoriteButton}
          title=""
          key=""
        />
      </ThemeProvider>,
    );
    expect(screen.getByAltText("icon")).toHaveAttribute(
      "src",
      "favorite_added.svg",
    );
    fireEvent.click(screen.getByRole("button"));
    expect(onClickFavoriteButton).toHaveBeenCalledTimes(1);
    screen.debug();
  });
});
