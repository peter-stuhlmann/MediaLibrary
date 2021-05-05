import { createGlobalStyle } from 'styled-components';

import OpenSansRegular from '../assets/fonts/open-sans/open-sans-regular.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansRegular}) format("truetype");
    font-weight: 400;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: rgb(25, 30, 40);
    color: #fff;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    margin: 0;
  }
`;

export default GlobalStyles;
