import styled from "styled-components";
import themes from "../utils/themes";
import {
  arrowOne,
  arrowTwo,
} from "../components/ServisesComponents/Bonuses/Component/BonusItem/BonusItem.styled";
import {
  nextArrowOne,
  nextArrowTwo,
  prevArrowOne,
  prevArrowTwo,
} from "./Animations.styled";

export const SliderWrapper = styled.div`
  position: relative;
  margin-inline: 51px;
  user-select: none;

  @media (max-width: 1055px) {
    margin-inline: 0px;
  }
`;

export const SliderContainerBg = styled.div`
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.gradientColor1RateCard} 0%,
    ${themes.primary.colors.gradientColor2RateCard} 100%
  );
  height: 425px;
  position: absolute;
  width: 100%;

  @media (max-width: 1055px) {
    top: 200px;
    height: 535px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 575px;
  }
`;

export const SwiperArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 15px;
  margin-inline: 51px;
  user-select: none;

  .swiper-button-next,
  .swiper-button-prev {
    right: initial;
    left: initial;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  @media (max-width: 1055px) {
    margin-inline: 15px;
  }
`;

export const FeedbackButtonWrapper = styled.div`
  display: flex;
  gap: 2em;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative !important;

  &:after {
    display: none;
  }

  svg path {
    transition: transform 1s ease-in-out;
  }
  &.prevBtn.initialDisabled {
    opacity: 0.35;
    pointer-events: none;
  }
  &.prevBtn {
    width: 3.159em;
    height: 3.159em;
    border: 1.5px solid #000000;

    & svg path:nth-child(1) {
      transform: translateX(30px);
    }
    &:hover {
      & path:nth-child(1) {
        animation: ${prevArrowOne} 1s 1 forwards ease-in-out;
      }
      & path:nth-child(2) {
        animation: ${prevArrowTwo} 1s 1 forwards ease-in-out;
      }
    }
  }

  &.feedbackPrevBtn {
    border: 1.8px solid #000000;
  }

  &.nextBtn {
    width: 6.63em;
    height: 2.7em;
    background: ${themes.primary.colors.primary};
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 1.17em;
    line-height: 17px;
    text-transform: uppercase;
    color: ${themes.primary.colors.portfolioBg};
    gap: 10px;

    & svg path:nth-child(1) {
      transform: translateX(-30px);
    }
    &:hover {
      & path:nth-child(1) {
        animation: ${nextArrowOne} 1s 1 forwards ease-in-out;
      }
      & path:nth-child(2) {
        animation: ${nextArrowTwo} 1s 1 forwards ease-in-out;
      }
    }
  }

  & svg {
    width: 18px;
    height: 16px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.prevBtn {
      width: 2.61em;
      height: 2.61em;
    }

    &.nextBtn {
      font-size: 0.95em;
      width: 6.8em;
      height: 2.77em;
    }

    &.feedbackPrevBtn,
    &.swiper-button-next-feedback,
    &.testimonial {
      & svg {
        width: 24px;
        height: 21px;
      }
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    &.prevBtn {
      width: 3.655em;
      height: 3.655em;
    }

    &.nextBtn {
      width: 7.643em;
      height: 3.123em;
      letter-spacing: 1px;
      padding-left: 5px;
    }
  }
`;

export const SlideContainer = styled.div`
  height: 680px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1055px) {
    margin-inline: 0;
    height: 800px;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -10px;
  right: 10px;
  width: 650px;
  height: 650px;
  transform: translateX(130px);
  opacity: 0;
  transition: all 0.3s;

  &.active {
    opacity: 1;
    transform: translateX(0);
    transition-delay: 0.3s;
  }

  @media (max-width: 1355px) {
    width: 450px;
    height: 450px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    top: 100px;
    right: -5px;
    width: 375px;
    height: 375px;
  }

  @media (max-width: 1055px) {
    top: 0px;
    right: 0px;
  }
`;

export const ContentWrapper = styled.div`
  min-height: 425px;
  padding: 47px 30px 57px;

  @media (max-width: 1055px) {
    padding: 164px 20px 40px;
    margin-top: 200px;
  }
`;

export const ProjectTitle = styled.h2<{ isBig: boolean }>`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${({ isBig }) => (isBig ? "30px" : "40px")};
  line-height: 140%;
  text-transform: uppercase;
  color: ${themes.primary.colors.primary};
  max-width: 700px;
  margin: 0;

  transform: translateY(55px);
  opacity: 0;

  &.active {
    transform: translateY(0px);
    opacity: 1;
    transition: all 0.5s;
  }

  @media (max-width: 1055px) {
    font-size: 24px;
    line-height: 132%;
    margin-bottom: 16px;

    &.active {
      transform: translateY(0px);
      opacity: 1;
      transition: all 0.5s 0.1s;
    }
  }

  @media (max-width: 450px) {
    font-size: ${({ isBig }) => (isBig ? "22px" : "24px")};
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 1000px;
    font-size: ${({ isBig }) => (isBig ? "38px" : "42px")};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column-reverse;
  }
`;

export const ProjectScope = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 24px;
  line-height: 233%;
  color: ${themes.primary.colors.darkBlue};

  span {
    color: ${themes.primary.colors.primary};
  }

  transform: translateY(55px);
  opacity: 0;

  &.active {
    transform: translateY(0px);
    opacity: 1;
    transition: all 0.5s 0.2s;
  }

  @media (max-width: 1055px) {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 5px;

    &.active {
      transform: translateY(0px);
      opacity: 1;
      transition: all 0.5s;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    span {
      display: none;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 36px;
  }
`;

export const ProjectScopeText = styled.p`
  margin: 0;
  max-width: 580px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 18px;
  line-height: 160%;
  color: ${themes.primary.colors.primary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap; /* let the text wrap preserving spaces */

  transform: translateY(55px);
  opacity: 0;

  &.active {
    transform: translateY(0px);
    opacity: 1;
    transition: all 0.5s 0.3s;
  }

  @media (max-width: 1055px) {
    font-size: 16px;
    -webkit-line-clamp: 5;
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 880px;
    font-size: 34px;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BottomSection = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 25px;

  transform: translateY(55px);
  opacity: 0;

  &.active {
    transform: translateY(0px);
    opacity: 1;
    transition: all 0.5s 0.5s;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 20px;
  }
`;

export const ReadMore = styled.div`
  padding: 0.5em 1.245em;
  background: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 1.34em;
  line-height: 160%;
  text-transform: uppercase;
  cursor: pointer;
  color: ${themes.primary.colors.portfolioBg};
  border: 2px solid ${themes.primary.colors.primary};
  transition: all 0.3s;

  &:hover {
    transition-delay: unset;
    background: none;
    color: ${themes.primary.colors.primary};
  }

  @media (max-width: 1055px) {
    font-size: 16px;
  }
`;

export const AllProjects = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 1.5em;
  line-height: 120%;
  color: ${themes.primary.colors.primary};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #5869dd;
    svg {
      & path:nth-child(1) {
        stroke: #5869dd;
        animation: ${arrowOne} 1s 1 forwards ease;
      }
      & path:nth-child(2) {
        stroke: #5869dd;
        animation: ${arrowTwo} 1s 1 forwards ease;
      }
    }
  }
  svg {
    & path:nth-child(1) {
      transform: translate(-13px, -13px);
    }
    & path:nth-child(2) {
      transform: translate(0px, 0px);
    }
  }
`;
