import { createGlobalStyle } from 'styled-components';

import AvenirRoman from '../assets/fonts/avenir/avenir-roman.otf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Avenir-Roman';
    src: url(${AvenirRoman}) format("opentype");;
    font-weight: 400;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: rgb(25, 30, 40);
    color: #fff;
    font-size: 16px;
    font-family: 'Avenir-Roman', sans-serif;
    line-height: 1.5;
    margin: 0;
    user-select: none;
  }
`;

export default GlobalStyles;
