import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  #root{
    max-width:100vw;
    overflow-x:hidden;
  }
  .main-wraper{
    padding: 1em 4em;
    width: 100vw; 
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
    font-family: Georgia, Times, 'Times New Roman', serif;
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
