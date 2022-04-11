import styled, { css, keyframes } from "styled-components";
import themes from "../utils/themes";
import Decoration from "../components/Decoration/Decoration";

export const AboutUsContainer = styled.section`
  position: relative;
  margin-top: 13.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: ${themes.primary.font.family.roboto};
`;

export const AboutUsWrapper = styled.div`
  width: 100%;
  margin: 2em auto;
  display: flex;
  justify-content: space-between;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutUsTitle = styled.h2`
  font-weight: ${themes.primary.font.weight.bold};
  font-size: ${themes.primary.font.size.quaternary};
  margin: 0;
`;

export const AboutUsCardContainer = styled.div`
  margin-left: ${themes.primary.spacing.septenary};
  width: ${themes.primary.spacing.aboutUsCard};
  display: flex;
  flex-direction: column;

  @media ${themes.primary.media.maxMobile} {
    width: ${themes.primary.spacing.aboutUsCardMobile};
    margin-left: 0;
    margin-bottom: 6em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:nth-child(odd) {
    justify-content: space-between;
    margin-top: 1em;
  }
`;

const floatAnimation = keyframes`
    0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

type imgProps = { delay: number };

export const WrapperAboutUSIMG = styled("div")<imgProps>`
  position: relative;
  display: flex;
  justify-content: center;
  overflow: visible;

  img {
    animation: ${floatAnimation} 3s infinite ease-in-out;
    animation-delay: ${(props) => (props.delay ? props.delay : "5")}s;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    margin-top: 0.5em;
    &.columnDescription {
      margin-top: 2em;
    }
  }
`;

export const CardDescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${themes.primary.font.size.buttonText};
  font-family: ${themes.primary.font.family.roboto};
  font-weight: 400;
  margin-top: 0.3em;

  &.columnDescription {
    margin-top: 0;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
`;

export const CardDescriptionSubDescription = styled.div`
  font-size: 1.3em;
  white-space: pre-wrap;

  &.columnDescription {
    width: 12.5em;
    padding-left: 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.6em;
    &.columnDescription {
      text-align: center;
      padding: 0;
    }
  }
`;

export const CardDescriptionValueWrapper = styled.div`
  position: relative;
  font-size: 1.3em;

  &.columnDescription {
    width: 12.5em;
    padding-left: 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    &.columnDescription {
      text-align: center;
      padding: 0;
    }
  }
`;

export const DecorationText = styled(Decoration)`
  position: absolute;
  height: 1em;
  top: 50%;
  left: -1%;
  z-index: -1;

  &.var {
    width: 12.2ch;
  }

  &.quantity {
    width: 3ch;
  }

  &.status {
    width: 13.5ch;
  }

  @media ${themes.primary.media.maxMobile} {
    &.var {
      left: 17%;
    }

    &.status {
      left: 13%;
    }
  }
`;

export const CardDescriptionValue = styled.span`
  position: relative;
  z-index: 1;
  display: flex;

  @media ${themes.primary.media.minPC} {
    &.columnDescription {
      width: 10em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    justify-content: center;
    font-size: 1.2em;
  }
`;

export const AboutUsInfoSupport = styled.div`
  width: 65%;
  margin: 5.5em auto 0 auto;

  @media ${themes.primary.media.onlyLaptop} {
    width: 80%;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 100%;
    margin: 5em auto 3em auto;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
  }
`;

export const AboutUsCodeIcon = styled.span`
  font-weight: ${themes.primary.font.weight.bold};
  font-family: ${themes.primary.font.family.sourceCode};
  font-size: 1.8em;
  display: block;
  color: ${themes.primary.colors.quinary};

  @media ${themes.primary.media.maxMobile} {
    font-size: 2em;
  }
`;

export const AboutUsDescription = styled.span`
  display: block;
  width: 80%;
  text-align: center;
  font-weight: 400;
  font-size: ${themes.primary.font.size.buttonText};
  line-height: 145%;
  margin: 0 auto;

  @media ${themes.primary.media.onlyTabletLandScape} {
    padding-left: 1em;
    text-align: left;
    width: 90%;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    padding-left: 0.5em;
    text-align: left;
  }

  @media ${themes.primary.media.maxMobile} {
    text-align: initial;
    padding-left: 0.5em;
    font-size: 1.9em;
    width: 100%;
  }
`;

const glassJarAnimation = keyframes`
 10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(2px, 0, 0);
  }
`;

type imgIllustrationProps = {
  isScrolled: boolean;
};
export const IllustrationWrapper = styled("div")<imgIllustrationProps>`
  display: flex;
  justify-content: center;
  margin-bottom: 5.625em;

  img {
    animation: ${({ isScrolled }) =>
      isScrolled
        ? css`
            ${glassJarAnimation} 1s
          `
        : "none"};
  }

  span:hover {
    animation: ${glassJarAnimation} 1s;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 10em;
    justify-content: flex-end;
    transform: rotate(-35deg);
  }
`;
