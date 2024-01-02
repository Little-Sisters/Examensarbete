import 'styled-components';

// Defines theme interface and extends DefaultTheme
declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    input: string;
    card: string;
    background: string;
    button: string;
    paper: string;
  }
}
