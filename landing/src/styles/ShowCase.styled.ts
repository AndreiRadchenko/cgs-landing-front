import styled from "styled-components";
import themes from "../utils/themes";

export const SliderWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const SwiperArrowContainer = styled.div`
  display: flex;
  margin-inline: 51px;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 15px;

  & > div {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  @media (max-width: 1055px) {
    margin-inline: 15px;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.prevBtn {
    width: 38px;
    height: 38px;
    border: 1.5px solid #000000;
  }
  &.nextBtn {
    width: 93px;
    height: 38px;
    background: ${themes.primary.colors.primary};
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    color: ${themes.primary.colors.portfolioBg};
    gap: 10px;
  }

  & svg {
    width: 18px;
    height: 16px;
  }
`;

export const SlideContainer = styled.div`
  margin-inline: 51px;
  height: 600px;
  position: relative;

  @media (max-width: 1055px) {
    margin-inline: 0;
    height: 500px;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 150px;
  right: 80px;
  width: 450px;
  height: 450px;
  transform: translateX(200px);
  opacity: 0;
  transition: all 1s;

  &.active {
    transform: translateX(0px);
    opacity: 1;
    transition: all 1s;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    top: 100px;
    right: 10px;
    width: 350px;
    height: 350px;
  }

  @media (max-width: 1055px) {
    top: -200px;
    width: 350px;
    height: 350px;
  }
`;

export const ContentWrapper = styled.div`
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.gradientColor1RateCard} 0%,
    ${themes.primary.colors.gradientColor2RateCard} 100%
  );
  min-height: 425px;
  padding: 47px 30px 57px;

  @media (max-width: 1055px) {
    padding: 164px 20px 40px;
    margin-top: 200px;
  }
`;

export const ProjectTitle = styled.h2`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 40px;
  line-height: 140%;
  text-transform: uppercase;
  color: ${themes.primary.colors.primary};
  max-width: 700px;
  margin: 0;

  transform: translateY(200px);
  opacity: 0;
  transition: all 1s;

  &.active {
    transform: translateY(0px);
    opacity: 1;
    transition: all 1s;
  }

  @media (max-width: 1055px) {
    font-size: 24px;
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

  transform: translateY(200px);
  opacity: 0;
  transition: all 1s;

  &.active {
    transform: translateY(0px);
    opacity: 1;
    transition: all 1s;
  }

  @media (max-width: 1055px) {
    font-size: 18px;
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

  transform: translateY(200px);
  opacity: 0;
  transition: all 1s 1s;

  &.active {
    transform: translateY(0px);
    opacity: 1;
    transition-delay: 1s;
    transition: all 1s;
  }

  @media (max-width: 1055px) {
    font-size: 16px;
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
`;

export const ReadMore = styled.div`
  padding: 8px 20px;
  background: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 18px;
  line-height: 160%;
  text-transform: uppercase;
  color: ${themes.primary.colors.portfolioBg};

  @media (max-width: 1055px) {
    font-size: 16px;
  }
`;

export const AllProjects = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 18px;
  line-height: 120%;
  color: ${themes.primary.colors.primary};
`;
