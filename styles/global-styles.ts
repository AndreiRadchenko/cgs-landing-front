import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  font-family: Mulish;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

* { 
  margin: 0; 
  padding: 0; 
}

body {
  font-family: Mulish;
}

textarea {
  font-family: Mulish;
}

.main-wraper {
  max-width: 1350px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  margin: 0 auto;
  
}

@media screen and (max-width: 768px) {
  header,
  footer,
  .main-wraper {
    padding: 1em 1em !important;
  }
}

@media screen and (max-width: 650px) {
  .main-wraper {
    padding: 1em 0 !important;
  }
}

@media screen and (max-width: 600px) {
  header,
  footer,
   {
    padding: 1em 1em !important;
  }
}

p,
label {
  font-family: Mulish;
  line-height: 1.5em;
}

input,
select {
  font-family: inherit;
  font-size: inherit;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.slick-list {
  width: 80% !important;
  margin: 0 auto !important;
}

 & #aboutUs .slick-list {  
  margin: 0 auto !important;
}

`;
