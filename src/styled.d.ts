import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: string;
      secondary: string;
    };
    fontSizes: {
      s: string;
      m: string;
      l: string;
    };
  }
}
