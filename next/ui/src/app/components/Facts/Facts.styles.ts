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
  height: 50% !important;

  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 769px) {
    height: 40% !important;
    margin-top: 20px;
  }
  @media screen and (max-width: 500px) {
    height: 30% !important;
    margin-top: 10px;
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
  & .slick-track {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1024px) {
    & .slick-slide {
      margin: 0;
      width: calc((100% - 120px) / 2) !important;
    }
    & .slick-slide:nth-child(2n + 1) {
      margin-right: 120px;
    }
    & .slick-slide:nth-child(n + 3) {
      margin-top: 80px;
    }
  }

  & .slick-slide > div > div > img {
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

export const FactContainer = styled('div')`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  text-align: justify;

  & .titleWrapper {
    margin: 4px 0 5px;
    display: flex;
    align-items: center;
  }
  & h2 {
    margin: 0;
    margin-right: 12px;
    font-size: 22px;
  }

  & .fact__text {
    margin: 0;
    font-size: 18px;
    line-height: 1.22;
  }

  & .fact__title {
    margin: 0;
    margin-bottom: 25px;
    padding: 2px 8px;
    border-radius: 5px;
    color: #fff;
  }

  @media screen and (max-width: 1023px) {
    align-items: center;
    text-align: center;
    & .fact__text {
      opacity: 0.5;
    }
  }
`;
