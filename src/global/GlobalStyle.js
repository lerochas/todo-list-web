import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none !important;
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    font-family: Lato,system,-apple-system,sans-serif;
    background-color: #fff !important;
  }
  a {
    text-decoration: none;
  }
  main {
    border-left: 8px solid #00e6b8;
    background-image: linear-gradient(to bottom right, #eafaf4, #fff);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24);
  }
  .css-hip9hq-MuiPaper-root-MuiAppBar-root {
    background-color: #fff !important;
  }
  .Toastify__toast-theme--light {
    color: #fff;
    background-color: #3E3E3E;
  }
`;

export default GlobalStyle;
