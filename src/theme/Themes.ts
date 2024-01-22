// These are the two modes that can be used in the app
// lightMode is the default mode
// darkMode is the mode that is used when the user switches to dark mode
// If you want to add a different color or mode you can add it here

export const lightMode = {
  mode: 'light',
  body: '#F9F5F3',
  bodyOpacity: 'rgba(249, 245, 243, 0.5)',
  heroOpacity: 'rgba(249, 245, 243, 0.15)',
  text: '#222020',
  textHover: '#746E6B', // Slightly lighter color on hover
  input: '#706F6F',
  card: '#E7E2DF',
  background: '#F9F5F3',
  button: '#C9B479',
  tab: 'rgba(231, 226, 223, 0.8)',
  buttonHover: '#AB9E74',
  menuHover: 'rgba(73, 72, 71, 0.3)',
  paper: '#F9F5F3',
  black: '#FFFFFF',
  grey: '#211E1E',
  productOne: '#E7E2DF', // Product card background color
  productTwo: '#F5EDDD', // Product card background color
  gradient: '#F9F5F3', // Gradient color for the background
  overlay: 'rgba(255, 255, 255, 0.2)',
  purple: '#f2e7f5;',
  strongPurple: '#e5bff7',
  footerBackground: '#E9E2CE',
  footerSecondaryBackground: '#52504c',
};

export const darkMode = {
  mode: 'dark',
  body: '#262524',
  bodyOpacity: 'rgba(38, 37, 36, 0.5)',
  heroOpacity: 'rgba(0, 0, 0, 0.5)',
  text: '#FBFCFE',
  textHover: '#9FA2AA', // Slightly darker color on hover
  input: '#C7C7C7',
  card: '#494847',
  background: '#262524',
  button: '#857452',
  tab: 'rgba(73, 72, 71, 0.7)',
  buttonHover: '#8F7E69',
  menuHover: 'rgba(249, 245, 243, 0.3)',
  paper: '#4E4A48',
  grey: '#E7E2DF',
  productOne: '#383432', // Product card background color
  productTwo: '#574840', // Product card background color
  gradient: '#262524', // Gradient color for the background
  black: '#262524',
  overlay: 'rgb(38,37,36, 0.2)',
  purple: '#2c242e',
  strongPurple: '#54324d',
  footerBackground: '#484239',
  footerSecondaryBackground: '#262524',
};
