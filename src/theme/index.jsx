import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{ 
   overflow-x: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
    background-color: #28616b;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #fc0;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 20px;
  }
`;
