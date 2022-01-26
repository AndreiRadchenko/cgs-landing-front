import styled from "styled-components";
import themes from "../../utils/themes";

type backGroundColor = "blue" | "orange" | "green";

type IContainerProps = {
  backGroundColor: backGroundColor;
  additionalImgUrl?: string;
};

type IColorProps = {
  backGroundColor: backGroundColor;
};

type IAdditionalImg = {
  additionalImgUrl?: string;
};

type IImage = {
  isFlipOnMobile?: boolean;
};

export const Container = styled.div<IContainerProps>`
  width: 100%;
  min-height: 100vh;
  padding-top: 2em;
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${themes.primary.colors.primary};
  background-color: ${(props) => themes.primary.colors[props.backGroundColor]};
  z-index: ${(props) => (props.additionalImgUrl ? "500" : "1")};
`;

export const NumberContainer = styled.div`
  position: absolute;
  top: 9em;
  left: -1.5em;

  @media ${themes.primary.media.maxTabletPortrait} {
    top: 4em;
    left: 66%;
  }

  @media ${themes.primary.media.maxMobile} {
    top: 2em;
    left: 59%;
  }
`;

export const Number = styled.div<IColorProps>`
  color: ${(props) => themes.primary.colors.lighten[props.backGroundColor]};
  font-size: 26em;

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 16em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 11em;
  }
`;

export const TitleContainer = styled.div``;

export const Title = styled.div`
  font-size: 2.5em;
  margin-left: 2.4em;
  color: ${themes.primary.colors.primary};

  @media ${themes.primary.media.maxTabletPortrait} {
    width: fit-content;
    margin-left: 5%;
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
  color: ${themes.primary.colors.decorationText};
  font-family: ${themes.primary.font.family.roboto};
  flex-grow: 1;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-left: 2em;
    display: flex;
    flex-direction: column;
  }
`;

export const ContentTextContainer = styled.div``;

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
  height: 35em;
  margin-bottom: 20%;

  @media ${themes.primary.media.maxMobile} {
    width: 23em;
    height: ${(props) => (props.isFlipOnMobile ? "34em" : `25em`)};
    transform: ${(props) =>
      props.isFlipOnMobile ? "scale(-1, 1)" : "initial"};
  }
`;

export const ContentTitle = styled.h2`
  margin: 0;
  max-width: 8em;
  font-size: 4em;
  line-height: 1em;
  color: ${themes.primary.colors.primary};
  white-space: break-spaces;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 2em;
  }
`;

export const ContentText = styled.p`
  font-size: 1.5em;
  max-width: 30.5em;
  line-height: 1.5em;
  color: ${themes.primary.colors.primary};
  white-space: break-spaces;

  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 40.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-right: 1em;
  }
`;

export const AdditionalImgContainer = styled.div`
  position: absolute;
  bottom: -12em;
  right: 0;

  @media ${themes.primary.media.maxMobile} {
    bottom: -7em;
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
