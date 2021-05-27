import styled from 'styled-components';

const imgSize = {
  w: '35px',
  h: '35px',
};

const Arrow = styled.div`
  position: absolute;
  z-index: 100;
  background-color: #fff;
  width: ${imgSize.w};
  height: 36%;

  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 769px) {
    height: 32%;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 500px) {
    height: 30%;
    top: 10%;
    margin: 10px 0;
  }
  @media screen and (min-width: 1149px) {
    background-color: transparent;
    top: 50%;
  }
  &.slick-prev:hover,
  &.slick-prev:focus,
  &.slick-next:hover,
  &.slick-next:focus {
    background-color: #fff;
  }
`;
export const SliderPrev = styled(Arrow)`
  top: 15%;
  left: 5%;
  @media screen and (max-width: 500px) {
    left: 0;
  }
  @media screen and (min-width: 1149px) {
    background-color: transparent;
    top: 50%;
  }
  @media screen and (min-width: 1149px) {
    left: 1%;
  }
`;

export const SliderNext = styled(Arrow)`
  top: 15%;
  right: 5%;
  @media screen and (max-width: 500px) {
    right: 0;
  }
  @media screen and (min-width: 1149px) {
    right: 1%;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;

  & .slick-track {
    display: flex;
    justify-content: space-between;
  }

  & .slick-slide {
    @media screen and (max-width: 1023px) {
      width: 100%;
    }
    @media screen and (min-width: 1024px) {
      width: calc((100% - 116px) / 3);
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
    /* border: 1px solid black;
    border-radius: 5px; */
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

  @media screen and (max-width: 1023px) {
    align-items: center;
    text-align: center;
    & .testimonials__text {
      opacity: 0.5;
    }
  }
`;
