import styled from "styled-components";
import themes from "../../utils/themes";

export const TestimonialsModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(241, 239, 237, 0.7);
  top: 0;
  right: 0;
  z-index: 99;
  display: grid;
  place-content: center;
`;

export const TestimonialsVideoContainer = styled.div`
  position: relative;
  width: 59.75em;
  min-height: 52.09em;
  padding: 2em;
  border: 1.5px solid ${themes.primary.colors.primary};
  background: ${themes.primary.colors.grey};

  @media ${themes.primary.media.maxMobile} {
    padding: 8px;
    width: 360px;
    min-height: 448px;

    > div:first-child {
      height: 213px !important;
    }
  }
`;

export const TestimonialsCrossContainer = styled.div`
  position: absolute;
  top: 4.25em;
  right: 4.25em;
  width: 4em;
  height: 4em;
  border: 1px solid ${themes.primary.colors.primary};
  background: ${themes.primary.colors.grey};

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const TestimonialsCrossMobileContainer = styled.div`
  display: none;
  position: absolute;
  border: 1px solid ${themes.primary.colors.primary};
  background: ${themes.primary.colors.grey};

  @media ${themes.primary.media.maxMobile} {
    display: block;
    top: -52px;
    right: 0px;
    width: 32px;
    height: 32px;
  }
`;

export const TestimonialsVideoInfoContainer = styled.div`
  margin-top: 1.3em;
`;

export const TestimonialsTitleAndArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const TestimonialsTitle = styled.div`
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: 3.333em;
  font-weight: 900;
  line-height: 140%;
  text-transform: uppercase;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 2.755em;
  }
`;

export const TestimonialsInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TestimonialsHeaderName = styled.div`
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: 2.84em;
  font-weight: 900;
  line-height: normal;

  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
  }
`;

export const TestimonialsHeaderPosition = styled.div`
  margin-top: 0.445em;
  color: ${themes.primary.colors.darkBlue};
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.5em;
  font-weight: 900;
  line-height: normal;

  &.mobile {
    display: none;
  }

  &:hover {
    text-decoration: underline;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;

    &.mobile {
      display: inline-block;
    }
    &.desktop {
      display: none;
    }
  }
`;

export const TestimonialsHeaderStar = styled.div`
  @media ${themes.primary.media.minPCFullHD} {
    span {
      width: 45px !important;
      height: 45px !important;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    span {
      width: 20px !important;
      height: 20px !important;
    }
  }
`;

export const TestimonialsInfoText = styled.div`
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.5em;
  font-style: normal;
  font-weight: 900;
  line-height: 160%; /* 28.8px */
  margin-top: 0.445em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 16px;
    font-size: 16px;
  }
`;

export const TestimonialsSlideHeadline = styled.div`
  position: absolute;
  color: ${themes.primary.colors.grey};
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.9em;
  font-weight: 900;
  bottom: 0.7em;
  left: 0.7em;
  max-width: 15.5em;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.55em;
    max-width: 15.5em;
    bottom: 1em;
    right: 1.1em;
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
  }
`;

export const TestimonialsSlideStar = styled.div`
  position: absolute;
  bottom: 1.33em;
  right: 2em;

  @media ${themes.primary.media.minPCFullHD} {
    bottom: 1.1em;
    right: 1.7em;

    span {
      width: 45px !important;
      height: 45px !important;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    bottom: 10px;
    right: 15px;

    span {
      width: 20px !important;
      height: 20px !important;
    }
  }
`;

export const TestimonialsSlidePlayBtnContainer = styled.div`
  position: relative;
  z-index: 2;

  @media ${themes.primary.media.minPCFullHD} {
    svg {
      width: 64px;
      height: 64px;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    svg {
      width: 30.5px;
      height: 30.5px;
    }
  }
`;

export const HoverBlockTestimonials = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${themes.primary.colors.blogBackground};
  right: -10px;
  bottom: -10px;
  border: 2px solid ${themes.primary.colors.primary};
  z-index: -1;
  display: flex;
  align-items: flex-end;

  &.hidden {
    visibility: hidden;
  }

  @media ${themes.primary.media.maxMobile} {
    border: 1.5px solid ${themes.primary.colors.primary};
    right: -4px;
    bottom: -4px;
  }
`;

export const HoverBlackBlockTestimonials = styled.div`
  height: 50%;
  width: 100%;
  outline: 2px solid ${themes.primary.colors.primary};
  background-color: black;

  @media ${themes.primary.media.maxMobile} {
    outline: 1.5px solid ${themes.primary.colors.primary};
  }
`;

export const TestimonialsSlideContainer = styled.div`
  width: 100%;
  height: 95.6%;
  position: relative;

  &:hover ${HoverBlockTestimonials} {
    &.hidden {
      visibility: visible;
    }
  }
  display: grid;
  place-content: center;

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: auto;
    aspect-ratio: 16 / 9.9;
  }
`;

export const TestimonialsSwiperContainer = styled.div`
  margin-top: 2em;
  margin-bottom: 10em;
  margin-right: -4.25em;

  .swiper-slide {
    width: 49.17em;
    height: 32em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 1.67em;
    margin-bottom: 8.34em;

    .swiper-slide {
      width: 41em;
      height: 25.5em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 16px;
    margin-bottom: 90px;
    margin-inline: -1.925em;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    .swiper-slide {
      width: 100%;
      height: 293px;
    }
  }
  @media (max-width: 380px) {
    .swiper-slide {
      width: 100%;
      height: 243px;
    }
  }
`;

export const TestimonialsSwiperArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  margin-top: 2em;

  .swiper-button-next,
  .swiper-button-prev {
    right: initial;
    left: initial;
  }
`;
