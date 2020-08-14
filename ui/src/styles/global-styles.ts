import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  // html,
  // body {
  //   height: 100%;
  //   width: 100%;
  // }
  
  #root{
    max-width: 100vw; 
    overflow-x:hidden;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  // #root {
  //   min-height: 100%;
  //   min-width: 100%;
  // }
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
  
  a.anchor{
    width:0;
    height:0;
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
