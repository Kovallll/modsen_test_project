import React, { createContext, useEffect, useState } from "react";

export interface IFavoriteContext {
  favoriteCards: string[];
  addFavoriteCards: (id: string) => void;
  removeFavoriteCards: (id: string) => void;
}

export const FavoriteContext = createContext<IFavoriteContext>({
  favoriteCards: [],
  addFavoriteCards: () => {},
  removeFavoriteCards: () => {},
});

const getFavoriteCardsFromLocalStorage = () => {
  return JSON.parse(
    localStorage.getItem("favoritesData") ?? JSON.stringify([]),
  );
};

export interface FavoriteContextProps {
  children: React.ReactNode;
}
export const FavoriteContextProvider = ({ children }: FavoriteContextProps) => {
  const [favoriteCards, setFavoriteCards] = useState(
    getFavoriteCardsFromLocalStorage(),
  );

  const addFavoriteCards = (artId: string) => {
    setFavoriteCards((prev: string[]) => [...prev, artId]);
  };

  const removeFavoriteCards = (artId: string) => {
    setFavoriteCards((prev: string[]) => prev.filter((id) => id !== artId));
  };

  useEffect(() => {
    localStorage.setItem("favoritesData", JSON.stringify(favoriteCards));
  }, [favoriteCards]);

  return (
    <FavoriteContext.Provider
      value={{ favoriteCards, addFavoriteCards, removeFavoriteCards }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
