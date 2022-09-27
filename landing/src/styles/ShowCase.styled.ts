import styled from "styled-components";
import themes from "../utils/themes";

export const SliderWrapper = styled.div`
  position: relative;
  margin-top: 14.583em;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  overflow: hidden;
  & .mySwiper {
    margin-left: 10.5vw;
    margin-right: 9vw;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-inline: 21px;
    & .mySwiper {
      margin: 0;
    }
    margin-top: 0;
  }
`;

export const NavigateLeft = styled.div`
  margin-top: 0;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 10.5vw;
  border-color: ${themes.primary.colors.comment};
  border-style: solid;
  border-width: 1px 1px 1px 0;
  color: ${themes.primary.colors.black};
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: 3.33em;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background-color: ${themes.primary.colors.blogBackground};
  &:after {
    content: none;
  }
  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.ourWorkTextBig};
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 2.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.307em;
    line-height: 198%;
    margin-bottom: 7px;
    writing-mode: horizontal-tb;
    transform: none;
    width: 100%;
    justify-content: flex-start;
    height: auto;
    position: relative;
    border: 0;
  }
`;

export const NavigateRight = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  right: 0;
  width: 9vw;
  background-color: ${themes.primary.colors.blogBackground};
  z-index: 100;
  border-color: ${themes.primary.colors.comment};
  border-style: solid;
  border-width: 1px 0 1px 1px;

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const ArrowContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  & svg {
    position: relative;
    left: 0;
    right: 0;
    width: 65px;
    height: 65px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    transform: scale(0.8);
  }
  &.hover {
    & path:first-child {
      fill: ${themes.primary.colors.portfolioHover};
    }
  }
`;

export const SlideContainer = styled.div`
  width: 100%;
  height: 29.3055vw;
  border-color: ${themes.primary.colors.comment};
  border-style: solid;
  border-width: 1px 0 1px 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 0;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 0.8em;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 40.625em;
    border-width: 1px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: 24.666em;
  padding: 2.666em 2.5em 0;
  border-bottom: 1px solid ${themes.primary.colors.comment};

  @media (max-width: 840px) {
    padding-top: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: 2.666em;
    height: 30em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 1em;
    font-size: 1rem;
    height: 14.5625em;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 79%;
  height: 35em;
  margin-bottom: 0.5em;

  @media ${themes.primary.media.maxMobile} {
    padding: 0;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 100%;
    margin-bottom: 1.346em;
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 1.666em 2.0833em 2.5em;

  @media ${themes.primary.media.maxMobile} {
    padding: 0 1.153em 1.923em;
  }
`;

export const ProjectTitle = styled.h2`
  margin: 0;
  font-size: 2em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.538em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1.923em;
  }
`;
export const ProjectScope = styled.div`
  font-size: 1.333em;
  color: ${themes.primary.colors.comment};
  line-height: 130%;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.153em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1.442em;
  }
`;

export const ProjectLinkButton = styled.a`
  text-decoration: none;
  color: ${themes.primary.colors.secondary};
  letter-spacing: 0.03em;
  padding: 7px 15px;
  font-size: 1.166em;
  background-color: ${themes.primary.colors.primary};

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.346em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 1.442em;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.916em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.2em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1em;
    margin-top: 0.48em;
    align-items: flex-start;
  }
`;

export const HoverText = styled.div`
  font-size: 1.5em;
  line-height: 160%;

  @media ${themes.primary.media.maxMobile} {
    font-size: 2em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 0;
    font-size: 1em;
  }
`;
