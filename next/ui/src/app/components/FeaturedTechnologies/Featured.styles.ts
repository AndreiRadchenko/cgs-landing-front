import styled from "styled-components";

import {
  NextArrowContainer,
  PrevArrowContainer,
} from "../Slider/Arrows.styles";

import {
  Container as SliderContainer,
} from "../Slider/Slider.styles";

export const FeaturedContainer = styled("div")`
  max-width: 800px;
  display: flex;
  justify-content: center;
  column-gap: 73px;

  @media screen and (max-width: 1023.5px) {
    align-items: center;
    text-align: left;
    flex-direction: column-reverse;
    padding: 0 7px;
  }
`;

export const TextContainer = styled.div`
  & h2 {
    text-align: center;
    margin: 0 0 19px 0;
  }
  & .featured__description {
    margin: 0;
    line-height: 1.67;
    color: #333;
    text-align: justify;
  }

  @media screen and (max-width: 1023.5px) {
    & .featured__description {  
    font-size: 18px;
  }
}

  @media screen and (max-width: 375px) {
    & .featured__description {
    text-align: center;
  } 
}

  @media screen and (min-width: 1024px) {
    min-width: 520px;
    & .featured__description {
      line-height: 1.67;
    }
    & h2 {
      margin: 0 0 25px 0;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: ${(props) => props.theme.colors.buttonBgColor};
  & img {
    margin: 10px 0 40px 0;
  }
  & .featured__name {
    margin: 0;
    position: absolute;  
    bottom: 10px;
    font-size: 18px;
    font-weight: 700;
  }

  @media screen and (max-width: 1023.5px) {
    margin-bottom: 31.5px;

    & img {
      margin-bottom: 15px;
      width: 60%;
    }

    & .featured__name {
      bottom: 15px;      
    }

    @media screen and (max-width: 900px) {
      & .featured__name {
        bottom: 30px;
      }
    }

    @media screen and (max-width: 780px) {
      & .featured__name {
        bottom: 25px;
      }
    }

    @media screen and (max-width: 780px) {
      & .featured__name {
        bottom: 23px;
      }
    }

    @media screen and (max-width: 630px) {
      & .featured__name {
        bottom: 20px;
      }
    }

    @media screen and (max-width: 570px) {
      & .featured__name {
        bottom: 18px;
      }
    }

    @media screen and (max-width: 520px) {
      & .featured__name {
        bottom: 16px;
      }
    }

    @media screen and (max-width: 414px) {
      & .featured__name {
        bottom: 5px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    min-width: 200px;
    min-height: 210px;
    border-radius: 16px;
  }
  @media screen and (max-width: 1023.5px) {
    border-radius: 16px;
  }
`;

export const NewContainer = styled("div")`
  display: flex;
  width: 90%;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    & ${SliderContainer} {
      width: auto;
    }

    & ${NextArrowContainer}, & ${PrevArrowContainer} {
      display: none;
    }

    & .swiper-container {
      overflow: visible;
    }

    & .swiper-wrapper {
      display: flex;
      transform: none !important;
      flex-direction: column;
      row-gap: 48px;
    }

    & .swiper-slide {
      width: auto !important;
    }

    & .swiper-slide-duplicate {
      display: none;
    }

    & .swiper-slide[data-swiper-slide-index="1"] ${FeaturedContainer} {
      flex-direction: row-reverse;
    }
  }
`;