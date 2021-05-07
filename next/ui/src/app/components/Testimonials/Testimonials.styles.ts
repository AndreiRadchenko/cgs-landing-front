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

  & .slick-track {
    display: flex;
    justify-content: space-between;
  }

  & .slick-slide {
    @media screen and (max-width: 350px) {
      width: 100%;
    }
    @media screen and (min-width: 1001px) {
      width: calc((100% - 116px) / 3) !important;
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

export const TestimonialContainer = styled('div')`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
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

  & .testimonials__flag {
    border: 1px solid black;
    border-radius: 5px;
  }

  & .testimonials__company {
    margin: 0;
    margin-bottom: 10px;
  }

  & .testimonials__text {
    margin: 0;
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 1.67;
  }

  & .testimonials__position {
    margin: 0;
    margin-bottom: 22px;
    padding: 2px 8px;
    border-radius: 5px;
    color: #fff;
  }

  & .testimonials__country {
    margin: 0 0 0 8px;
  }

  @media screen and (max-width: 1000px) {
    align-items: center;
    text-align: center;
    & .testimonials__text {
      opacity: 0.5;
    }
  }
`;
