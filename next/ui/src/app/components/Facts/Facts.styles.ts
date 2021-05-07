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
  left: 10px !important;
  @media screen and (max-width: 650px) {
    margin: 15px;
    top: 15% !important;
    left: 5% !important;
  }
`;

export const SliderNext = styled(Arrow)`
  right: 10px !important;
  @media screen and (max-width: 650px) {
    margin: 15px;
    top: 15% !important;
    right: 5% !important;
  }
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

  @media screen and (min-width: 1001px) {
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
    @media screen and (max-width: 350px) {
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
  font-family: Mulish;

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

  @media screen and (max-width: 1000px) {
    align-items: center;
    text-align: center;
    & .fact__text {
      opacity: 0.5;
    }
  }
`;
