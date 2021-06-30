import styled from "styled-components";

const imgSize = {
  w: "35px",
  h: "35px",
};

const Arrow = styled.div`
  position: absolute;
  z-index: 100;
  background-color: #fff;
  width: ${imgSize.w};
  height: 50%;

  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 769px) {
    top: 10%;
    height: 45%;
    margin-top: 20px;
  }
  @media screen and (max-width: 500px) {
    height: 30%;
    margin-top: 10px;
    top: 15%;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
  &.slick-prev:hover,
  &.slick-prev:focus,
  &.slick-next:hover,
  &.slick-next:focus {
    background-color: #fff;
  }
`;
export const SliderPrev = styled(Arrow)`
  top: 20%;
  left: 5%;
`;

export const SliderNext = styled(Arrow)`
  top: 20%;
  right: 5%;
`;





export const FactContainer = styled("div")`
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  text-align: justify;

  & .titleWrapper {
    margin: 4px 0 5px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1023px) {
      align-self: center;
    }
  }
  & h2 {
    margin: 0;
    margin-right: 20px;
    font-size: 22px;
    margin-bottom: 15px;
  }

  & .fact__text {
    margin: 0;
    font-size: 18px;
    line-height: 1.67;
    text-align: justify;
  }

  & .fact__title {
    margin: 0;
    margin-bottom: 25px;
    padding: 2px 8px;
    border-radius: 5px;
    color: #fff;
  }

  @media screen and (max-width: 1024px) {
    align-items: center;
    text-align: start;
    & .fact__text {
      opacity: 0.5;
      padding: 0 30px;
    }
  }
`;

export const FactTitle = styled("p")`
  background: ${(props) => props.theme.colors.buttonBgColor};
  border-radius: 5px;
`;


export const SlideWrapper = styled("div")`
  & .slick-track {
    display: flex;   
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%; 

  @media screen and (min-width: 1024px) {

     & .slick-track {
      flex-wrap: wrap;
     } 
     & .slick-slide {
        flex: 50%;
        padding: 40px;
        box-sizing: border-box;
     }

     & .slick-slide:nth-child(1) {
        flex: 49%;
        box-sizing: border-box;
     }
     & .slick-slide:nth-child(3) {
       padding-bottom: 60px;
     }
     & .slick-slide:nth-child(4) {
       padding-bottom: 60px;
     }
     & .slick-slide:nth-child(6) {
        flex: 49%;
        box-sizing: border-box;
     }
  }

  @media screen and (max-width: 1023px) {
      & .slick-next, .slick-prev {
      z-index: 2;
    }
  }
  
  & .slick-slider {
    @media screen and (max-width: 650px) {
      margin: 0;
    }
  }
  & .slick-slide {
    display: flex;
    justify-content: center;
  }
  & .slide-container {
    display: flex;
    justify-content: center;
  }
  & .slick-slide > div > div > img {
    margin: auto;
    @media screen and (max-width: 1023px) {
      width: 100%;
    }
  }
  
  & .slides *:focus {
    outline: 0;
    outline: none;
  }
  & .slick-next:before,
  & .slick-prev:before {
    content: none;
  }
  & .slick-next {
    @media (max-width: 420px) {
      right: 20px;
    }
  }
  & .slick-prev {
    @media (max-width: 420px) {
      left: 20px;
    }
  }
`;
