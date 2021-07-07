import { TechnoImageParams } from "./../../../types/components/index";
import styled from "styled-components";

const imgSize = {
  w: "35px",
  h: "35px",
};

const Arrow = styled.div`
  position: absolute;
  z-index: 100;
  background-color: #fff !important;
  width: ${imgSize.w} !important;
  height: 250px !important;

  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 769px) {
    height: 230px !important;
    margin-top: 20px;
  }
  @media screen and (min-width: 1025px) {
    display: none;
  }
`;
export const SliderPrev = styled(Arrow)`
  top: 20% !important;
  left: 5% !important;
`;

export const SliderNext = styled(Arrow)`
  top: 20% !important;
  right: 5% !important;
`;

export const Dots = styled("img")`
  width: 80px;
  height: 100px;
  position: absolute;
  top: -1em;
  left: -4em;
`;
export const DotsSecond = styled(Dots)`
  top: 50%;
  right: -3em;
  left: unset;
  @media screen and (max-width: 476px) {
    display: none;
  }
`;
export const TechnoContainer = styled("div")`
  display: flex;
  width: 100%;

  @media screen and (max-width: 1023.5px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    & div:last-child {
      order: -1;
    }

    & ul {
      display: flex;
      flex-direction: row;
    }
    & div:last-child {
      height: auto;
    }
    & div:last-child img {
      width: 100%;
      height: 100%;
      @media (max-width: 420px) {
        /* width: 80%; */
        margin: 0 auto;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    align-items: flex-start;

    .slick-slide:nth-child(3n - 3) &,
    .slick-slide:nth-child(4n - 4) & {
      flex-direction: row;
      margin-top: 2em;
    }
    .slick-slide:nth-child(4) & div:last-child {
      margin-bottom: 15%;
    }

    & > div:first-child {
      width: 33%;
    }
  }
`;
export const DescContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 18px;
  & li {
    opacity: 0.5;
    line-height: 1.66;
  }
  & > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  & h2 {
    margin: 20px 0 0;
    font-size: 36px;
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }
  @media screen and (min-width: 1023.5px) and (max-width: 1060px) {
    & h2 {
      font-size: 32px;
    }
  }

  @media screen and (min-width: 1023.5px) {
    .slick-slide:nth-child(1) & {
      margin-left: 15px;
    }
    .slick-slide:nth-child(2) & {
      margin-left: 15px;
    }
    .slick-slide:nth-child(3) & {
      margin-right: 5px;
    }
    .slick-slide:nth-child(4) & {
      margin-right: 5px;
    }

    & > ul li {
      white-space: nowrap;
    }
  }

  @media screen and (min-width: 1200px) {
    .slick-slide:nth-child(1) & {
      margin-left: 105px;
    }
    .slick-slide:nth-child(2) & {
      margin-left: 75px;
    }
    .slick-slide:nth-child(3) & {
      margin-right: 75px;
    }
    .slick-slide:nth-child(4) & {
      margin-right: 60px;
    }

    & > ul li {
      white-space: nowrap;
    }
  }

  @media screen and (max-width: 1023.5px) {
    align-items: center;
    & > ul {
      padding: 0 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }    
    & li:not(:last-child) {
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 320px) {
    width: 235px
  }
`;

export const HorizontalSep = styled("div")`
  width: 55px !important;
  height: 2px;
  background: #0c1033;
  border-radius: 5px;
  margin: 2em 0 !important;
  @media screen and (max-width: 1023px) {
    margin: 1em 0 !important;
  }
`;

const paddingsArray = ['30px', '100px', '140px', '140px']

export const TechnoImage = styled("img")<TechnoImageParams>`
  @media screen and (min-width: 1023.5px) {
     padding-top: ${ (props) =>  paddingsArray[props.number] };
  }
  @media screen and (max-width: 1023.5px) {
    padding-top: 30px;
  }
`;

export const SlideWrapper = styled("div")`
  & .slick-track {
    display: flex;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%; 

  @media screen and (min-width: 1023.5px) {

     & .slick-track {
      flex-wrap: wrap;
     } 
     
     & .slick-slide {
        flex: 50%;
        padding: 15px;
        box-sizing: border-box;
     }

     & .slick-slide:nth-child(1) {
        flex: 49%;
        /* padding: 15px; */
        box-sizing: border-box;
     }

     & .slick-slide:nth-child(6) {
        flex: 49%;
        /* padding: 15px; */
        box-sizing: border-box;
     }
  }

  @media screen and (max-width: 1023.5px) {
      & .slick-next, .slick-prev {
      z-index: 2;
    }
    & .slick-next {
      right: 5%;
    }
    & .slick-prev {
      left: 5%;
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

export const Container = styled("div")`
  display: flex;
  width: 100%;   
`

export const DesktopContainer = styled("div")`
  display: grid;
  width: 86%;
  margin: 0px auto;
  grid-template-columns: 1fr 1fr;
  -webkit-column-gap: 80px;
  column-gap: 80px;
  row-gap: 30px;
     
  @media screen and (max-width: 1023.5px) {
    display: none;   
  }
  & > div:nth-child(1) {   
    flex-direction: row-reverse;
  }
  & > div:nth-child(2) {   
    flex-direction: row-reverse;
  } 
`;

export const MobileContainer = styled("div")`
  @media screen and (min-width: 1024px) {
    display: none;    
  }

  display: flex;
  justify-content: center;
  width: inherit;
  height: inherit; 

  & .swiper-slide {
      width: 100% !important;
  } 
`