import styled from "styled-components";
import CodeIcon from "../components/CodeIcon/CodeIcon";
import themes from "../utils/themes";
import { ICodeIcon } from "../components/CodeIcon/CodeIcon.styled";

export const LetsCodeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 60px;
  font-family: ${themes.primary.font.family.roboto};

  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  width: 30.5em;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 335px;
  }
`;

export const ImageContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 3.3em;

  @media ${themes.primary.media.maxTabletPortrait} {
    top: initial;
    margin-top: 4em;
  }
`;

export const ImageTagsContainer = styled.section`
  position: relative;
  height: 74px;
`;

export const ImageCatContainer = styled.section`
  position: relative;
  width: 39em;
  height: 35em;
`;

export const LestCodeContent = styled.div`
  width: 50%;
`;

export const LetsCodeImageWrapper = styled.div`
  position: absolute;

  * {
    position: relative;
    left: -5%;
    top: -5%;
  }
`;

export const CatIconWrapper = styled.div`
  position: absolute;

  @media ${themes.primary.media.maxTabletPortrait} {
    right: 26%;
    top: 87%;
  }
`;

export const h2CodeIconOpen = styled(CodeIcon).attrs({
  color: themes.primary.colors.quinary,
})<ICodeIcon>`
  bottom: 0;
  left: -2%;

  @media ${themes.primary.media.maxTabletPortrait} {
    bottom: 76%;
    left: 13%;
  }
`;

export const h2CodeIconClose = styled(CodeIcon).attrs({
  color: themes.primary.colors.quinary,
})<ICodeIcon>`
  top: 10%;
  left: 60%;

  @media ${themes.primary.media.maxTabletPortrait} {
    top: 17%;
    right: 15%;
    left: initial;
  }
`;

export const pCodeIcon = styled(CodeIcon).attrs({
  color: "#90E645",
})<ICodeIcon>`
  top: -2em;
  left: 20%;

  @media ${themes.primary.media.maxTabletPortrait} {
    top: 2em;
    left: 47%;
  }
`;
