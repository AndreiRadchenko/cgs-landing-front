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
  width: 59.5em;
  min-height: 53.3em;
  box-shadow: 0 0 0 1.5px black;
  background: ${themes.primary.colors.grey};

  @media ${themes.primary.media.maxMobile} {
    box-shadow: 0 0 0 1px black;
    width: 360px;
    min-height: 448px;

    > div:nth-child(2) {
      > div:first-child {
        height: 213px !important;
      }
    }
  }
`;

export const TestimonialsCrossContainer = styled.div`
  height: 3.33em;
  width: 100%;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor2} 0%,
    ${themes.primary.colors.mainGradientColor1} 100%
  );
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid ${themes.primary.colors.primary};
`;

export const TestimonialsCrossWrapper = styled.div`
  align-self: flex-end;
  display: block;
  width: 3.33em;
  height: 100%;
  border-left: 1px solid ${themes.primary.colors.primary};

  background: ${themes.primary.colors.grey};
`;

export const TestimonialsModalVideoContainer = styled.div`
  box-shadow: 0 0 0 0.5px black;
  padding: 1.5em 2em 2em;

  @media ${themes.primary.media.maxMobile} {
    box-shadow: none;
    padding: 0.67em;
    padding-top: 0.77em;
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

  &.adminSlide {
    font-size: 19px;
  }

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

  &.grey {
    color: ${themes.primary.colors.darkGrey};
  }

  &.adminSlide {
    font-size: 10px;
  }

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

  &.adminSlide {
    font-size: 10px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 16px;
    font-size: 16px;
  }
`;

export const TestimonialsSlideHeadline = styled.div`
  position: absolute;
  color: ${themes.primary.colors.grey};
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.5em;
  font-weight: 900;
  bottom: 0.7em;
  left: 0.9em;
  max-width: 15.5em;
  text-shadow: 0px 0px 24px ${themes.primary.colors.primary};

  &.adminSlide {
    font-size: 15px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.25em;
    max-width: 15.5em;
    bottom: 1em;
    right: 1.1em;
    text-shadow: 0px 0px 25.460491180419922px #000;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    text-shadow: none;
  }
`;

export const TestimonialsSlideStar = styled.div`
  position: absolute;
  bottom: 0.7em;
  right: 0.9em;

  span {
    width: 28px !important;
    height: 28px !important;
  }

  @media ${themes.primary.media.minPCFullHD} {
    bottom: 1.1em;
    right: 1.7em;

    span {
      width: 37px !important;
      height: 37px !important;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    right: 8px;
    bottom: 15px;

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
      width: 53px;
      height: 53px;
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
  right: -14px;
  bottom: -14px;
  border: 1.5px solid ${themes.primary.colors.primary};
  z-index: -1;
  display: flex;
  align-items: flex-end;

  &.hidden {
    right: -8px;
    bottom: -8px;
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
  outline: 1.5px solid ${themes.primary.colors.primary};
  background-color: black;

  @media ${themes.primary.media.maxMobile} {
    outline: 1.5px solid ${themes.primary.colors.primary};
  }
`;

export const TestimonialsSlideContainer = styled.div`
  width: 100%;
  height: 97.35%;
  position: relative;
  display: grid;
  place-content: center;

  & .slideImage {
    object-fit: cover;
  }

  &.adminSlide {
    height: 255px;
  }

  &:hover ${HoverBlockTestimonials} {
    &.hidden {
      visibility: visible;
    }
  }

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
    width: 43.34em;
    height: 25em;
  }

  .swiper-wrapper {
    column-gap: 24px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 1.67em;
    margin-bottom: 8.34em;

    .swiper-wrapper {
    column-gap: 32px;
  }

    .swiper-slide {
      width: 36.1em;
      height: 20.815em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 16px;
    margin-bottom: 90px;
    margin-inline: -1.925em;

    .swiper-wrapper {
      column-gap: 0px;
    }
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
