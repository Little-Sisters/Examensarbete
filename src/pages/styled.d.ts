// styled.d.ts

import 'styled-components';

// Defines theme interface and extends DefaultTheme
// This is used so that typescript knows what the theme object looks like and doesn't throw errors

  export interface DefaultTheme {
    mode: string;
    body: string;
    bodyOpacity: string;
    text: string;
    textHover: string;
    input: string;
    card: string;
    background: string;
    button: string;
    paper: string;
    footer: string;
    footerDetail: string;
    footerText: string;
    black: string;
  }

