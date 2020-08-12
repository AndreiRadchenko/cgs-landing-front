import styled from 'styled-components';

const imgSize = {
  w: '30px',
  h: '30px',
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
  margin-top: 25px;
  z-index: 999;
  cursor: pointer;
  top: 100% !important;
  left: 40% !important;
  @media screen and (max-width: 1000px) {
    left: 35% !important;
  }
  @media screen and (max-width: 650px) {
    left: 25% !important;
  }
  @media screen and (max-width: 450px) {
    left: 10% !important;
  }
`;

export const SliderNext = styled(Arrow)`
  margin-top: 25px;
  z-index: 999;
  cursor: pointer;
  top: 100% !important;
  right: 40% !important;

  @media screen and (max-width: 1000px) {
    right: 35% !important;
  }
  @media screen and (max-width: 650px) {
    right: 25% !important;
  }
  @media screen and (max-width: 450px) {
    right: 10% !important;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;

  & .slicke-slide > div > {
    margin: auto;
  }

  & .slick-slider {
    width: 100%;
    height: 100%;
    & .slick-list,
    & .slick-list .slick-track {
      width: 100%;
      height: 100%;
      & > div > div {
        width: 100%;
        height: 100%;
      }
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

  & .slick-dots {
    & > li > button::before {
      margin-top: 12px;
      opacity: 1;
      color: #97c3f9;
    }
    & .slick-active {
      color: #0c1033;
    }
  }
`;
