import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  palette: {
    common: {
      black: "#393939",
      white: "#ffffff",
      grey: "#3939391a",
      darkGrey: "#3939394a",
    },
    primary: "#E0A449",
    secondary: "#F17900",
  },
  fontSizes: {
    xxs: "12px",
    xs: "14px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "48px",
    xxl: "64px",
  },
  media: {
    xxs: "(max-width: 425px)",
    xs: "(max-width: 500px)",
    sm: "(max-width: 600px)",
    md: "(max-width: 768px)",
    lg: "(max-width: 1000px)",
    xl: "(max-width: 1200px)",
    xxl: "(max-width: 1440px)",
  },
  padding: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "32px",
    xl: "64px",
  },
  margin: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "32px",
    xl: "64px",
    xxl: "128px",
  },
};
