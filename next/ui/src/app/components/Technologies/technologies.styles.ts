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
export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;

  & .slick-track {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  & .slick-slide {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 90px;
    & .slick-slide {
      margin: 0;
      justify-content: space-between;
      width: calc((100% - 15%) / 2) !important;
    }

    & .slick-slide:nth-child(1) {
      margin-left: 15%;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1060px) {
    & .slick-slide:nth-child(1) {
      margin-left: 0;
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

export const Dots = styled('img')`
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
export const TechnoContainer = styled('div')`
  display: flex;
  width: 100%;

  @media screen and (max-width: 1024px) {
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
      height: 200px;
    }
    & div:last-child img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: flex-end;

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
export const DescContainer = styled('div')`
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
  }
  @media screen and (min-width: 1024px) and (max-width: 1060px) {
    & h2 {
      font-size: 32px;
    }
  }
  @media screen and (min-width: 1024px) {
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
  }

  @media screen and (max-width: 1024px) {
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
      margin-right: 23px;
    }
  }
`;
export const HorizontalSep = styled('div')`
  width: 55px !important;
  height: 2px;
  background: #0c1033;
  border-radius: 5px;
  margin: 2em 0 !important;
  @media screen and (max-width: 1023px) {
    margin: 1em 0 !important;
  }
`;
