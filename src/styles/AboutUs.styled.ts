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
  &.columnDescription {
    width: 200px;
    padding-left: 1em;
  }
`;

export const CardDescriptionValueWrapper = styled.div`
  position: relative;

  &.columnDescription {
    width: 200px;
    padding-left: 1em;
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
`;

export const CardDescriptionValue = styled.span`
  position: relative;
  z-index: 1;
  display: flex;
`;

export const AboutUsInfoSupport = styled.div`
  width: 55%;
  margin: 5.5em auto 0 auto;
`;

export const AboutUsCodeIcon = styled.span`
  font-weight: ${themes.primary.font.weight.bold};
  font-family: ${themes.primary.font.family.sourceCode};
  font-size: 1.8em;
  display: block;
  color: ${themes.primary.colors.quinary};
`;

export const AboutUsDescription = styled.span`
  display: block;
  width: 827px;
  text-align: center;
  font-weight: 400;
  font-size: 26px;
  line-height: 145%;
  margin: 0 auto;
`;

export const IllustrationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5.625em;
`;
