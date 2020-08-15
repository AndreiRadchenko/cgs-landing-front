import styled from 'styled-components';

const imgSize = {
  w: '35px',
  h: '35px',
};

const Arrow = styled.div`
  position: absolute;
  width: ${imgSize.w} !important;
  height: ${imgSize.h} !important;
  & img {
    width: 100%;
    height: 100%;
  }
`;
export const SliderPrev = styled(Arrow)`
  left: -50px !important;
  @media screen and (max-width: 650px) {
    //margin: 15px;
    //top: 100% !important;
    //left: 20% !important;
    opacity: 0;
    display: none;
  }
`;

export const SliderNext = styled(Arrow)`
  right: -50px !important;
  @media screen and (max-width: 650px) {
    //margin: 15px;
    //top: 100% !important;
    //right: 20% !important;
    opacity: 0;
    display: none;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;

  & .slick-slider {
    margin: 0 1em;
    @media screen and (max-width: 1000px) {
      margin: 0 5em;
    }
    @media screen and (max-width: 650px) {
      margin: 0;
    }
  }

  //& .slide-container {
  //  margin: 0 5%;
  //}
  & .slick-slide > div > div > img {
    margin: auto;
    @media screen and (max-width: 450px) {
      width: 300px;
    }
    @media screen and (max-width: 350px) {
      width: 280px;
    }
    @media screen and (max-width: 320px) {
      width: 100%;
    }
  }
  /*
  & .slick-slider {
    height: 100%;
    & .slick-list {
      height: 100%;
      & .slick-track {
        height: 100%;
        & > div > div {
          height: 100%;
          & > div {
            height: 100%;
          }
        }
      }
    }
  } */

  & .slides *:focus {
    outline: 0;
    outline: none;
  }

  & .slick-next:before,
  & .slick-prev:before {
    content: none;
  }
`;
