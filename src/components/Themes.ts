// These are the two modes that can be used in the app
// lightMode is the default mode
// darkMode is the mode that is used when the user switches to dark mode
// If you want to add a different color or mode you can add it here

export const lightMode = {
  mode: 'light',
  body: '#F9F5F3',
  bodyOpacity: 'rgba(249, 245, 243, 0.7)',
  text: '#222020',
  textHover: '#746E6B', // Slightly lighter color on hover
  input: '#706F6F',
  card: '#E7E2DF',
  background: '#F9F5F3',
  button: '#D8C39A',
  paper: '#F9F5F3',
  footerBackground: '#E7E2DF',
  black: '#FFFFFF',
  grey: '#211E1E',
  productOne: '#E7E2DF', // Product card background color
  productTwo: '#F5EDDD', // Product card background color
};

export const darkMode = {
  mode: 'dark',
  body: '#262524',
  bodyOpacity: 'rgba(38, 37, 36, 0.7)',
  text: '#FBFCFE',
  textHover: '#9FA2AA', // Slightly darker color on hover
  input: '#C7C7C7',
  card: '#494847',
  background: '#262524',
  button: '#857452',
  paper: '#4E4A48',
  footerBackground: '#211E1E',
  grey: '#E7E2DF',
  productOne: '#383432', // Product card background color
  productTwo: '#574840', // Product card background color
};
