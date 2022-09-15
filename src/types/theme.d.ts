import 'styled-components';

export interface IColor {
  white: string;
  black: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColor;
  }
}

declare global {
  interface ITheme {
    theme: DefaultTheme;
  }
}
