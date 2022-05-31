import styled from "styled-components";
import themes from "../utils/themes";

export const BodyContainer = styled.section`
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const BodyDescriptionWrapper = styled.div`
  margin-top: 5em;
  width: 50%;

  @media ${themes.primary.media.onlyLaptop} {
    margin-top: 6em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    margin-top: 2em;
  }
`;

export const BodyDescriptionContent = styled.div``;

export const BodyTitle = styled.span`
  font-size: 6.2em;
  font-family: ${themes.primary.font.family.barlow};
  font-weight: ${themes.primary.font.weight.semiBold};

  @media ${themes.primary.media.maxMobile} {
    font-size: 8.3em;
    font-weight: ${themes.primary.font.weight.extraBold};
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 7.3em;
  }
`;

export const BodySubtitle = styled.span`
  display: block;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.light};
  font-size: ${themes.primary.font.size.quaternary};
  line-height: 125%;

  @media ${themes.primary.media.maxMobile} {
    width: calc(95% - 2em);
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 100%;
  }
`;

export const CodeDescription = styled.span`
  font-family: ${themes.primary.font.family.sourceCode};
  display: block;
  margin-top: 1em;
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: 1.5em;
  line-height: 145%;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1.2em;
    width: 100%;
    width: calc(95% - 2em);
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 100%;
  }
`;

export const WrapperBgImg = styled.div`
  position: absolute;
  right: -1%;
  top: 5%;
  width: 63%;
  transform: rotate(1.5deg);

  @media ${themes.primary.media.onlyLaptop} {
    top: 8%;
    right: -1%;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 63%;
    right: -7%;
    top: 10%;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 60%;
    top: 15%;
    right: -5%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: calc(100% + 25em);
    position: relative;
    overflow: hidden;
    top: 90%;
    left: 48%;
    transform: translateX(-50%);
  }

  @media ${themes.primary.media.minTablet} {
    top: 90%;
    left: 48%;
    width: calc(100% + 25em);
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    top: 105%;
    left: 48%;
    width: 160%;
  }
`;
