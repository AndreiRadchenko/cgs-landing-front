import styled from "styled-components";

export const FeaturedContainer = styled("div")`
  max-width: 800px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  text-align: left;
  margin-top: 48px;

  @media screen and (max-width: 1023.5px) {
    align-items: center;
    text-align: left;
    flex-direction: column-reverse;
    padding: 0 7px;
  }
`;

export const TextContainer = styled.div`
  & h2 {
    text-align: center;
    margin: 0 0 19px 0;
  }
  & .featured__description {
    margin: 0;
    line-height: 1.67;
    color: #333;
    text-align: justify;
  }

  @media screen and (max-width: 1023.5px) {
    & .featured__description {  
    font-size: 18px;
  }
}

  @media screen and (max-width: 375px) {
    & .featured__description {
    text-align: center;
  } 
}

  @media screen and (min-width: 1024px) {
    min-width: 520px;
    & .featured__description {
      line-height: 1.67;
    }
    & h2 {
      margin: 0 0 25px 0;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: ${(props) => props.theme.colors.buttonBgColor};
  & img {
    margin: 10px 0 40px 0;
  }
  & .featured__name {
    margin: 0;
    position: absolute;  
    bottom: 10px;
    font-size: 18px;
    font-weight: 700;
  }

  @media screen and (max-width: 1023.5px) {
    width: 144px;
    height: 155px;
    margin-bottom: 31.5px;
    & img {
      margin-bottom: 15px;
      width: 60%;
    }
    & .featured__name {
      bottom: 15px;      
    }
  }
  @media screen and (min-width: 1024px) {
    min-width: 200px;
    min-height: 210px;
    border-radius: 16px;
  }
  @media screen and (max-width: 1023.5px) {
    border-radius: 16px;
  }
`;



export const DesktopContainer = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  & > ${FeaturedContainer}:nth-child(2n){
    flex-direction: row-reverse;
  }

  & > ${FeaturedContainer}:first-child{
    margin-top: 0;
  }
  
  & > ${FeaturedContainer}:nth-child(2n+1) > ${TextContainer} {
    margin-right: 73px;
  }
  & > ${FeaturedContainer}:nth-child(2n) > ${TextContainer} {
    margin-left: 73px;
  }
`;


export const MobileContainer = styled("div")`
  display: flex;
  justify-content: center;
  width: inherit;
  height: inherit;  
`;

export const Container = styled("div")`
  width: inherit;
  height: inherit;
  

  @media screen and (min-width: 1024px) {
    & > ${MobileContainer} {
      display: none;
    }
  }

  @media screen and (max-width: 1023.5px) {
    & > ${DesktopContainer} {
      display: none;
    }
  }
`;
