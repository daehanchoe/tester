import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* @import url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Marck+Script&display=swap'); */
  @font-face {
    font-family: 'SDSamliphopangche_Outline';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  #root {
    margin: 0 auto;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    background-color: white;
    @media all and (min-width: 500px) {
        width: 500px;
        min-height: 100vh;
    }
  }
  body{
    background-color: #fff;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none !important;
    &:hover {
      filter: brightness(90%);
    }
    &:active {
      filter: brightness(80%);
    }
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  hr {
    margin: 0;
  }
  p {
    line-height: 130%;
  }
`;

export default GlobalStyle;
