import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    effect: {
      transitionHover: string;
    };
    colors: {
      red: string;
      background: string;
      white: string;
      black: string;
      green: string;
      grey: string;
    };
    fontSize: {
      title: string;
      titleMobile: string;
      xl: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
    mediaQueries: {
      lg: string;
      bg: string;
      md: string;
      sm: string;
      xs: string;
    };
  }
}
