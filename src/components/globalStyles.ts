import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
}
input {
    background: ${({ theme }) => theme.input};
    color: ${({ theme }) => theme.text};
}
button {
    background: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.text};
}
`;
