export const BASE_URL: string = "https://api.artic.edu/api";

export const artInitialData = {
  data: [
    {
      id: 0,
      image_id: "",
      artwork_type_title: "",
      title: "",
      department_title: "",
    },
  ],
  config: { iiif_url: "" },
  pagination: { total_pages: 0 },
};

export const searchInitialData = {
  data: [
    {
      id: 0,
      image_id: "",
      artwork_type_title: "",
      title: "",
      department_title: "",
    },
  ],
  config: { iiif_url: "" },
};

export enum Paths {
  Home = "/",
  Favorites = "favorites",
  ArtPage = "artpage",
  NotFound = "/*",
}

export const selectData = [
  { optionValue: "none", value: "None" },
  { optionValue: "ascendingYear", value: "Ascending order year" },
  { optionValue: "decreasingYear", value: "Decreasing order year" },
  { optionValue: "ascendingName", value: "Ascending order name" },
  { optionValue: "decreasingName", value: "Decreasing order name" },
];

export const paginationWidth = 40;

export const paginationVisibleCount = 4;
