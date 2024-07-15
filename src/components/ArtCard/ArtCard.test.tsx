import { ThemeProvider } from "styled-components";

import { defaultTheme as theme } from "src/theme";
import ArtCard from ".";

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("ArtCard", () => {
  it("renders ArtCard component", () => {
    const onClick = jest.fn();
    const onClickFavoriteButton = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <ArtCard
          image=""
          id=""
          isAdded
          onClick={onClick}
          onClickFavoriteButton={onClickFavoriteButton}
          subtitle=""
          text=""
          title=""
          key=""
        />
      </ThemeProvider>,
    );
  });

  it("check FavoriteButton click", () => {
    const onClick = jest.fn();
    const onClickFavoriteButton = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <ArtCard
          image=""
          id=""
          isAdded
          onClick={onClick}
          onClickFavoriteButton={onClickFavoriteButton}
          subtitle=""
          text=""
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
  });
});
