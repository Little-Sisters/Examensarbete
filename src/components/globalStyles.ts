import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme}) => theme.body};
    color: ${({ theme}) => theme.text};
    font-family: 'Josefin Sans', sans-serif;
}
`