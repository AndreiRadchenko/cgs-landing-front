import styled from "styled-components";
import themes from "../../utils/themes";

type backGroundColor = "blue" | "orange" | "green";

type IActive = {
  active: boolean;
};

type IContainerProps = {
  backGroundColor: backGroundColor;
  additionalImgUrl?: string;
};

type IColorProps = {
  backGroundColor: backGroundColor;
  active: boolean;
};

type IAdditionalImg = {
  additionalImgUrl?: string;
};

type IImage = {
  isFlipOnMobile?: boolean;
  active?: boolean;
};

export const Container = styled.div<IContainerProps>`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  padding-top: 2em;
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${themes.primary.colors.primary};
  background-color: ${(props) => themes.primary.colors[props.backGroundColor]};
  z-index: ${(props) => (props.additionalImgUrl ? "35" : "1")};
  box-sizing: border-box;
  overflow: hidden;
`;

export const NumberContainer = styled.div`
  position: absolute;
  top: 3em;
  left: -1.5em;

  @media ${themes.primary.media.maxTabletLandScape} {
    top: 9em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    top: 4em;
    left: 66%;
  }

  @media ${themes.primary.media.maxMobile} {
    top: 2em;
    left: 49%;
  }
`;

export const Number = styled.div<IColorProps>`
  color: ${(props) => themes.primary.colors.lighten[props.backGroundColor]};
  font-size: 26em;
  font-weight: ${themes.primary.font.weight.extraBold};

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 17em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 16em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 14.6em;
  }
`;

export const TitleContainer = styled.div``;

export const Title = styled.div`
  font-size: 2em;
  margin-left: 2.4em;
  color: ${themes.primary.colors.primary};
  font-weight: ${themes.primary.font.weight.bold};

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.8em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: fit-content;
    margin-left: 5%;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.7em;
  }
`;

export const ContentContainer = styled.div`
  margin-left: 26em;
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: ${themes.primary.font.family.gilroy};
  flex-grow: 1;

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-left: 16em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-left: 2em;
  }
  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;

export const ContentTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8rem;
  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 0;
  }
`;

export const ContentImgContainer = styled.div<IAdditionalImg>`
  display: flex;
  justify-content: ${(props) =>
    props.additionalImgUrl ? "flex-end" : "center"};
  align-items: center;
  height: 100%;
  flex-grow: 1;

  @media ${themes.primary.media.maxTabletPortrait} {
    align-self: ${(props) => (props.additionalImgUrl ? "flex-end" : "initial")};
  }
`;

export const ContentImage = styled.div<IImage>`
  position: relative;
  z-index: 500;
  width: 33em;
  margin-bottom: 30%;
  height: ${(props) => (props.isFlipOnMobile ? "41em" : "35em")};

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 30em;
    transform: ${(props) =>
      props.isFlipOnMobile ? "scale(-1, 1)" : "initial"};
  }
  @media ${themes.primary.media.maxMobile} {
    width: 25em;
    height: ${(props) => (props.isFlipOnMobile ? "37em" : `26em`)};
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 23em;
    height: ${(props) => (props.isFlipOnMobile ? "36em" : `22.5em`)};
  }
  animation: ${({ active }) => (active ? "image 2s" : null)};
  @keyframes image {
    0% {
      margin-right: -10rem;
      opacity: 0;
    }
    100% {
      margin-right: 0;
      opacity: 1;
    }
  }
`;

export const ContentTitle = styled.h2`
  margin: 0;
  max-width: 8em;
  height: fit-content;
  font-size: 4.5em;
  line-height: 1em;
  color: ${themes.primary.colors.primary};
  white-space: break-spaces;
  font-weight: ${themes.primary.font.weight.extraBold};

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 0.5em;
    font-size: 3.4em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 2em;
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: 100%;
    margin-top: 1em;
    font-size: 2.5em;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 2.3em;
  }
`;

export const ContentTextWrapper = styled.div`
  font-size: 1.3em;
  max-width: 28rem;
  line-height: 1.5em;
  color: ${themes.primary.colors.primary};
  white-space: break-spaces;
  overflow: hidden;
  box-sizing: border-box;
  @media ${themes.primary.media.maxTabletLandScape} {
    max-width: 22rem;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 24rem;
    font-size: 1.6em;
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: 35rem;
    padding-right: 1em;
    line-height: 1.25em;
    font-size: 1.4em;
  }
`;
export const ContentText = styled.p`
  line-height: 140%;
  overflow: hidden;
  box-sizing: border-box;
  animation-timing-function: linear;
  margin: 0;
  margin-top: 15px;

  @media ${themes.primary.media.maxMobile} {
    line-height: 150%;
  }
`;

export const AdditionalImgContainer = styled.div<IActive>`
  position: absolute;
  bottom: -6em;
  right: 0;
  animation: ${({ active }) => (active ? "image 2s" : null)};
  @media ${themes.primary.media.maxMobile} {
    bottom: -2em;
  }
`;

export const AdditionalImg = styled.div`
  position: relative;
  width: 14em;
  height: 48em;

  @media ${themes.primary.media.maxMobile} {
    width: 9em;
    height: 30em;
  }
`;
