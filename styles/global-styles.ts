import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'MulaRegular';
  src: url(./fonts/Muli/Muli-Regular.ttf) format('truetype');
}
// @import "http://fonts.fontstorage.com/import/muli.css";
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
  body {
    font-family: MulaRegular;
  }
  textarea {
    font-family: MulaRegular;
  }
  .main-wraper{
    max-width:1450px;
    overflow-x:hidden;
    display: flex;
    flex-direction:column;
    align-items:center;
    padding-top: 30px;
    margin : 0 auto
  }
  
  @media screen and (max-width: 768px) {
    header, footer, .main-wraper{
      padding: 1em 2em!important;
    }
  }
  @media screen and (max-width: 600px) {
    header, footer, .main-wraper{
      padding: 1em 1em!important;
    }
  }
  p,
  label {
    font-family: MulaRegular;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  a{
    text-decoration: none;
    color:inherit;
    cursor: pointer;
  }
`;
