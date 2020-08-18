import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'MulaRegular';
  src: url(./fonts/Muli/Muli-Regular.ttf) format('truetype');
}
// @import "http://fonts.fontstorage.com/import/muli.css";
  body {
    font-family: MulaRegular;
  }
  textarea {
    font-family: MulaRegular;
  }
  #root{
    max-width:100vw;
    overflow-x:hidden;
    display: flex;
    flex-direction:column;
    align-items:center;
  }
  .main-wraper{
    padding: 1em 4em;
    width: 100vw; 
    max-width:1200px;
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
