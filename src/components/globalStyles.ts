import { createGlobalStyle } from 'styled-components';

// This is the global style for the app
// Here you can add any css that you want to be applied to the whole app

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
