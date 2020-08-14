import styled from 'styled-components';

const imgSize = {
  w: '50px',
  h: '50px',
};

const widthProjectCard = '378px';

const Arrow = styled.div`
  position: absolute;
  width: ${imgSize.w} !important;
  height: ${imgSize.h} !important;
  & img {
    width: 100%;
    height: 100%;
    @media screen and (max-width: 500px) {
      width: 70%;
      height: 70%;
    }
  }
`;
export const SliderPrev = styled(Arrow)`
  left: -50px !important;
  @media screen and (max-width: 500px) {
    margin: 15px;
    top: 100% !important;
    left: 70px !important;
  }
`;

export const SliderNext = styled(Arrow)`
  right: -50px !important;
  @media screen and (max-width: 500px) {
    margin: 15px;
    top: 100% !important;
    right: 50px !important;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;

  & .slick-slider {
    margin: 0 5em;
    @media screen and (max-width: 500px) {
      margin: 0;
    }
  }

  & .slick-slide > div > div {
    margin: auto;
    width: ${widthProjectCard};
  }

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
  }

  & .slides *:focus {
    outline: 0;
    outline: none;
  }

  & .slick-next:before,
  & .slick-prev:before {
    content: none;
  }
`;
