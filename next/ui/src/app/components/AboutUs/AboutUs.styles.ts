import styled from 'styled-components';

const imgSize = {
  w: '35px',
  h: '35px',
};

const Arrow = styled.div`
  position: absolute;
  z-index: 100;
  background-color: #fff !important;
  width: ${imgSize.w} !important;
  height: 85% !important;
  margin-top: 30px;

  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 769px) {
    height: 50% !important;
    margin-top: 30px;
    top: 15% !important;
  }
  @media screen and (min-width: 1024px) {
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

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;

  & .slick-slider {
    margin: 0 1em;

    @media screen and (max-width: 1023px) {
      margin: 0 5em;
    }
    @media screen and (max-width: 650px) {
      margin: 0;
    }
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
`;

export const Wrapper = styled('div')`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const AboutUsContainer = styled('div')`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-family: Mulish;

  & > h2 {
    margin: 16px 0 8px;
  }
  & .about-us__position {
    border-radius: 5px;
    color: #fff;
  }

  & > p {
    margin: 0 0 22px;
    padding: 0 10px;
  }

  & > q {
    font-weight: 300;
    line-height: 1.68;
    opacity: 0.5;
  }

  @media screen and (min-width: 1024px) {
    &:not(:last-child) {
      margin-right: 162px;
    }

    & q {
      opacity: 1;
      font-size: 19px;
      line-height: 1.57;
    }
  }
`;

export const Avatar = styled('div')`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
`;

export const SlideWrapper = styled('div')`
  & .slick-track {
    display: flex;
  }
  @media screen and (min-width: 1024px) {
    & .slick-slide:not(:last-child) {
      margin-right: 162px;
    }
  }
`;
