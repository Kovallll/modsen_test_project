export const removeFromFavorite = (artId: number | string) => {
  const favoritesData: Array<number> = JSON.parse(
    localStorage.getItem("favoritesData") ?? JSON.stringify([]),
  );
  localStorage.setItem(
    "favoritesData",
    JSON.stringify(favoritesData.filter((id) => id !== artId)),
  );
};
