import styled from "styled-components";

export const Name = styled("p")`
  font-size: 19px;
  font-weight: 700;

  @media screen and (max-width: 1023.5px) {
    font-size: 24px;
  }

  @media screen and (max-width: 380px) {
    font-size: 14px;
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
`;

export const ImageContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  & > ${Image} {
    padding-right: 10px;
  }

  @media screen and (max-width: 1023.5px) {
    & > ${Image} {
      padding-right: 0;
    }
  }
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
  }
`;

export const FlagContainer = styled("div")`
  width: 40px;
  height: 24px;
  object-fit: cover;
`;

export const Header = styled("div")`
  display: flex;
  align-items: center;

  & > ${Name} {
    margin-right: 20px;
  }

  & > ${FlagContainer} {
    margin-right: 10px;
  }
`;

export const InfoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  padding-right: 25px;

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

  @media screen and (max-width: 380px) {
    font-size: 14px;
  }
`;

export const TechnologiesWrapper = styled("div")`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  
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
