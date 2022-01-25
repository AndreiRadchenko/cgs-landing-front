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

export const Container = styled.div<IContainerProps>`
  width: 100%;
  height: 100vh;
  padding-top: 5em;
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
`;

export const Number = styled.div<IColorProps>`
  color: ${(props) => themes.primary.colors.lighten[props.backGroundColor]};
  font-size: 26em;
`;

export const TitleContainer = styled.div``;

export const Title = styled.div`
  font-size: 2.5em;
  margin-left: 2.4em;
  color: ${themes.primary.colors.primary};
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
`;

export const ContentTextContainer = styled.div``;

export const ContentImgContainer = styled.div<IAdditionalImg>`
  display: flex;
  justify-content: ${(props) =>
    props.additionalImgUrl ? "flex-end" : "center"};
  align-items: center;
  height: 100%;
  flex-grow: 1;
`;

export const ContentImage = styled.div`
  position: relative;
  z-index: 500;
  width: 33em;
  height: 35em;
  margin-bottom: 20%;
`;

export const ContentTitle = styled.h2`
  margin: 0;
  max-width: 7em;
  font-size: 4.5em;
  line-height: 1em;
  color: ${themes.primary.colors.primary};
`;

export const ContentText = styled.p`
  font-size: 1.7em;
  max-width: 24em;
  line-height: 1.5em;
  color: ${themes.primary.colors.primary};
`;

export const AdditionalImgContainer = styled.div`
  position: absolute;
  bottom: -12em;
  right: 0;
`;

export const AdditionalImg = styled.div`
  position: relative;
  width: 14em;
  height: 48em;
`;
