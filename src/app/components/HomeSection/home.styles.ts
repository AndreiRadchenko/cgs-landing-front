import styled from "styled-components";
import { PropsHomeWrapper } from "types/components/index";

export const HomeWrapper = styled("div")`
  display: flex;
  position: relative;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 55px 80px;
  & > * {
    width: 47%;
  }
  @media screen and (max-width: 900px) {
    padding: 0 15px 80px;
  }
  @media screen and (max-width: 1023.5px) {
    flex-direction: column;
    padding: 0 0 25px;
    & > * {
      width: 90%;
    }
  }

  & h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  & p {
    font-size: 18px;
    font-weight: 300;
    text-align: justify;
  }
`;

export const Dots = styled("img")`
  width: 80px;
  height: 70px;
  position: absolute;
  top: -1.1em;
  left: -6em;
`;

export const ModalTitle = styled("h2")`
  width: 90%;
`;

export const Сlose = styled("button")`
  outline: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

export const ContentBlock = styled("article")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > p {
    opacity: 0.5;
    margin: 1em 0;
    @media screen and (max-width: 650px) {
      margin: 1em 0;
    }
  }
  & > h1 {
    margin: 0;
  }
  @media screen and (max-width: 1023.5px) {
    justify-content: center;
    text-align: center;
    margin-bottom: 24px;
    align-items: center;
    width: 90%; 
    order: 1;

    & > a {
      margin: 1em 0 2em 0;
      @media screen and (max-width: 650px) {
        margin: 0 0 1.5em 0;
      }
    }
  }
`;
export const Ilustration = styled("img")`
  width: 100%;
  height: 425px;

  @media screen and (min-width: 769px) and (min-width: 1023.5px) {
     height: 400px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ImgMobile = styled("img")`
  width: 65%;
  margin: 0 auto;
  margin-bottom: 20px;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const LinkButton = styled("a") <PropsHomeWrapper>`
  text-align: center;
  background-color: ${(props) => props.theme.colors.buttonBgColor};
  border-radius: 2em;
  padding: 0.7em;
  border: 0;
  color: white;
  min-width: 200px;
  width: fit-content;
  cursor: pointer;
  transition: all 0.3s ease-in;
  font-size: 18px;
  margin-top: 10px;
  display: ${(props) => (props.mobile ? "none" : "")};
  &:hover {
    background: ${(props) => props.theme.colors.buttonBgColorActive};
  }
  
  @media screen and (max-width: 520px) {
    min-width: 180px;
  }
  @media screen and (max-width: 467px) {  
    min-width: 150px;
    font-size: 17px;
  }
  @media screen and (max-width: 414px) {  
    min-width: 150px;
    font-size: 16px;
  }
  @media screen and (max-width: 402px) {  
    min-width: 150px;
    font-size: 15px;
  }
  @media screen and (max-width: 394px) {  
    min-width: 140px;
    font-size: 14px;
  }
  @media screen and (max-width: 369px) {  
    min-width: 130px;
    font-size: 13px;
  }
  @media screen and (max-width: 346px) {  
    min-width: 120px;
    font-size: 13px;
  }
  @media screen and (max-width: 330px) {  
    min-width: 110px;
    font-size: 13px;
  }
`;


export const LinkButtonSecond = styled("a")`
  text-align: center;
  border-radius: 2em;
  background-color: ${(props) => props.theme.colors.buttonBgColor};  
  padding: 0.7em;
  border: 0;
  color: white;
  min-width: 200px;
  width: fit-content;
  cursor: pointer;
  transition: all 0.3s ease-in;
  font-size: 18px;
  margin-top: 10px;
  margin-left: 20px;
  
  @media screen and (min-width: 650px) and (max-width: 1023.5px) {
    margin-left: 50px;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 50px;
  }

  @media screen and (min-width: 1100px) {
    min-width: 200px;
  }

  @media screen and (max-width: 520px) {  
    min-width: 180px;
  }
  @media screen and (max-width: 467px) {  
    min-width: 150px;
    font-size: 17px;
  }
  @media screen and (max-width: 414px) {  
    min-width: 150px;
    font-size: 16px;
  }
  @media screen and (max-width: 402px) {  
    min-width: 150px;
    font-size: 15px;
  }
  @media screen and (max-width: 394px) {  
    min-width: 140px;
    font-size: 14px;
  }
  @media screen and (max-width: 369px) {  
    min-width: 130px;
    font-size: 13px;
  }
  @media screen and (max-width: 346px) {  
    min-width: 120px;
    font-size: 13px;
  }
  @media screen and (max-width: 330px) {  
    min-width: 110px;
    font-size: 13px;
  }
`

export const LinkButtonsWrapper = styled("div")`
  display: flex;
  width: 100%;  

  @media screen and (max-width: 1023.5px) {
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    justify-content: space-between;
  } 
`;

