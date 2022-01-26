import styled from "styled-components";
import themes from "../utils/themes";
import Decoration from "../components/Decoration/Decoration";

export const AboutUsContainer = styled.section`
  position: relative;
  margin-top: 13.5em;
`;

export const AboutUsWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media ${themes.primary.media.onlyLaptop} {
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
  }
`;

export const AboutUsTitle = styled.h2`
  font-weight: ${themes.primary.font.weight.bold};
  font-size: ${themes.primary.font.size.quaternary};
  margin: 0;
`;

export const AboutUsCardContainer = styled.div`
  width: ${themes.primary.spacing.aboutUsCard};
  display: flex;
  flex-direction: column;

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 6em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:nth-child(odd) {
    justify-content: space-between;
    margin-top: 2em;
  }
`;

export const CardDescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${themes.primary.font.size.buttonText};
  font-family: ${themes.primary.font.family.roboto};
  font-weight: 400;

  &.columnDescription {
    flex-direction: column;
    align-items: center;
  }
`;

export const CardDescriptionSubDescription = styled.div`
  font-size: 1.3em;

  &.columnDescription {
    width: 200px;
    padding-left: 1em;
  }

  @media ${themes.primary.media.onlyLaptop} {
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
  }

  @media ${themes.primary.media.maxMobile} {
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
    width: 200px;
    padding-left: 1em;
  }

  @media ${themes.primary.media.onlyLaptop} {
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
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
  height: 1.2em;

  &.var {
    width: 6.7em;
    top: 47%;
    left: 10%;
  }

  &.quantity {
    width: 1.7em;
    top: 40%;
  }

  &.status {
    width: 7.7em;
    top: 47%;
    left: 10%;
  }
  
  @media ${themes.primary.media.onlyLaptop} {
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
  }

  @media ${themes.primary.media.maxMobile} {
    &.var {
      left: 14%;
    }
  }
  
\`;
`;

export const CardDescriptionValue = styled.span`
  position: relative;
  z-index: 1;
  display: flex;

  @media ${themes.primary.media.onlyLaptop} {
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
  }

  @media ${themes.primary.media.maxMobile} {
    justify-content: center;
  }
`;

export const AboutUsInfoSupport = styled.div`
  width: 55%;
  margin: 5.5em auto 0 auto;

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
  width: 100%;
  text-align: center;
  font-weight: 400;
  font-size: 26px;
  line-height: 145%;
  margin: 0 auto;

  @media ${themes.primary.media.onlyLaptop} {
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    padding-left: 0.5em;
    text-align: left;
  }

  @media ${themes.primary.media.maxMobile} {
    text-align: initial;
    padding-left: 0.5em;
  }
`;

export const IllustrationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5.625em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 6em;
    justify-content: flex-end;
    transform: rotate(-35deg);
  }
`;
