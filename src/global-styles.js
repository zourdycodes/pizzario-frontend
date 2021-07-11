import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
    font-family: 'Kanit', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #222222;
    transition: all .3s;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #444444;
    border-radius: 10px;
  }

  ::selection {
    background-color: red;
    color: white;
  }
  


`;
