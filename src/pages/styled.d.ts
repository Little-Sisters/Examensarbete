import 'styled-components';

// Defines theme interface and extends DefaultTheme
// This is used so that typescript knows what the theme object looks like and doesnt throw errors
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
