import styled from "styled-components";

export const Name = styled("p")`
  font-size: 19px;
  font-weight: 700;

  @media screen and (max-width: 1023.5px) {
    font-size: 24px;
  }

  @media screen and (max-width: 460px) {
    font-size: 16px;
  }
`;

export const Image = styled("img")`
  width: inherit;
  object-fit: contain;

  @media screen and (max-width: 1023.5px) {
    height: 400px;
  }

  @media screen and (max-width: 650px) {
    height: 230px;
  }
  
  @media screen and (max-width: 380px){
    height: 150px;
  }
`;

export const ImageContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Container = styled("div")`
  display: grid;
  grid-template-columns: 40fr 60fr;
  column-gap: 30px;

  @media screen and (max-width: 1023.5px) {
    display: flex;
    flex-direction: column-reverse;
    grid-template-columns: none;
    column-gap: normal;
  }
`;

export const ShortDescription = styled("div")`
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  opacity: 0.5;

  @media screen and (max-width: 1023.5px) {
    display: none;
  }
  
  @media screen and (max-width: 380px) {
    font-size: 14px;
  }
`;

export const FullDescription = styled("p")`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  line-height: 24px;

  @media screen and (max-width: 1023.5px) {
    font-size: 14px;
    font-weight: 300;
    line-height: 32px;
    min-height: 100px;
    opacity: 0.5;
    text-align: justify;
  }
  
  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;

export const FlagContainer = styled("div")`
  width: 40px;
  height: 24px;
  object-fit: cover;
  
  @media screen and (max-width: 460px) {
    width: 30px;
    height: 20px;
  }
`;

export const FlagWrapper = styled("div")`
  display: flex;
  align-items: center;
`

export const Header = styled("div")`
  display: flex;
  align-items: center;

  & > ${Name} {
    margin-right: 20px;
  }

  & > ${FlagWrapper} > ${FlagContainer} {
    margin-right: 10px;
  }
  
  @media screen and (max-width: 400px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > ${Name} {
      margin-bottom: 5px;
      margin-right: 0;
    }
  }
`;

export const InfoContainer = styled("div")`
  display: flex;
  flex-direction: column;

  & > ${Header} {
    margin-bottom: 8px;
  }

  & > ${ShortDescription} {
    margin-bottom: 18px;
  }

  @media screen and (max-width: 1023.5px) {
    align-items: center;

    & > ${Header} {
      margin-top: 10px;
      margin-bottom: 15px;
    }
  }
`;

export const Country = styled("span")`
  font-size: 18px;
  font-weight: 400;

  @media screen and (max-width: 460px) {
    font-size: 16px;
  }
`;

export const TechnologiesWrapper = styled("div")`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  column-gap: 12px;

  @media screen and (max-width: 1023.5px) {
    margin-top: 0;
    justify-content: center;
  }
`;

export const TechnologiesContainer = styled("div")`
  margin-top: auto;
  margin-bottom: auto;

  @media screen and (max-width: 1023.5px) {
    & > ${TechnologiesWrapper} {
      margin-top: 0;
    }
  }
`;
