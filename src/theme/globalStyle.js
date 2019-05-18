import { createGlobalStyle } from 'styled-components';

export const theme = {
  color: {
    c1: '#011627',
    c2: '#FF0022',
    c3: '#41EAD4',
    c4: '#fafafa',
    c5: '#B91372',
  },
};


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
