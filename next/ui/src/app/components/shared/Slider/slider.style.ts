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
  @media screen and (max-width: 650px) {
    margin: 15px;
    top: 15% !important;
    left: 5% !important;
  }
`;

export const SliderNext = styled(Arrow)`
  @media screen and (max-width: 650px) {
    margin: 15px;
    top: 15% !important;
    right: 5% !important;
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
  & .slick-list {
    background-color: 'red';
  }
  & .slick-slide {
    display: flex;
    justify-content: center;
  }
  & .slide-container {
    display: flex !important;
    justify-content: center;
  }
  & .slick-slide > div > div > img {
    margin: auto;
    @media screen and (max-width: 450px) {
      width: 355px;
    }
    @media screen and (max-width: 350px) {
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
