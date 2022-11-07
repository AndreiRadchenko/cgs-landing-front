import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocks};
  
  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};
  }  
  
  @media ${themes.primary.media.maxMobile} {
    margin-top: 2em;
  }
`;

export const Subtitle = styled.h3`
    font-size: ${themes.primary.font.size.webAuditSubtitle};
  line-height: 140%;
  text-transform: uppercase;
  margin: 0 0 .775em 0;

  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.webAuditSubtitlePC};
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.webAuditSubtitleTabletLandscape};
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: ${themes.primary.font.size.webAuditSubtitleTabletPortrait};
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`

export const TypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 94px;
  margin-top: 4.5em;
`;

export const TypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;


export const ImageWrapper = styled.div`
  position: relative;
  height: 100px;
`;

export const TypeTitle = styled.div`
  margin-top: 1.12em;
  font-size: 2.7em;
  color: ${themes.primary.colors.darkBlue};
  line-height: 160%;
  
  @media ${themes.primary.media.minPC} {
    font-size: 2.7em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 2.3em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 2em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.7em;
  }
`;

export const HoverModalWrapper = styled.div`
  position: absolute;
  opacity: 0;
  background: ${themes.primary.colors.blogBackground};
  border: 2px solid ${themes.primary.colors.primary};
  transition: 0.3s opacity;
  z-index: 2;
  max-width: 397px;

  &:hover {
    opacity: 1;
  }
`;

export const HoverModalHeader = styled.div`
  position: relative;
  height: 35px;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor1} 0%,
    ${themes.primary.colors.mainGradientColor2} 100%
  );
  border-bottom: 2px solid ${themes.primary.colors.primary};
`;

export const Button = styled.div`
  width: 35px;
  height: 35px;
  border-left: 2px solid ${themes.primary.colors.primary};
  border-bottom: 2px solid ${themes.primary.colors.primary};
  background: ${themes.primary.colors.blogBackground};
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    width: 18px;
    height: 18px;
    &.min {
      border-bottom: 3.0828px solid ${themes.primary.colors.primary};
    }

    &.max {
      border-width: 3.0828px 1.5414px 0.7707px 1.5414px;
      border-style: solid;
      border-color: ${themes.primary.colors.primary};
    }

    &.close {
      position: relative;
      &::before,
      &::after {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        content: " ";
        height: 25px;
        width: 3px;
        background-color: ${themes.primary.colors.primary};
      }

      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  right: 0;
`;

export const ModalContent = styled.div`
  padding: 17px 17px 39px 28px;
`;

export const ModalText = styled.div`
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;

  &.title {
    color: ${themes.primary.colors.darkBlue};
  }
  
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tertiary};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.oneAndHalf};
`;
