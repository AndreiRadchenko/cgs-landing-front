import styled, { css } from "styled-components";
import themes from "../utils/themes";
import BaseButton from "../components/BaseButton/BaseButton";
import { IBaseButtonProps } from "../types/Button.types";

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
  font-weight: 600;

  @media ${themes.primary.media.maxMobile} {
    font-size: 8.3em;
    font-weight: 700;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 7.3em;
  }
`;

export const BodySubtitle = styled.span`
  display: block;
  margin-top: 1em;
  font-family: ${themes.primary.font.family.roboto};
  font-size: ${themes.primary.font.size.quaternary};
  font-weight: 500;
  line-height: 125%;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0.5em;
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
  font-weight: 600;
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
  right: 1%;
  top: 0;
  width: 65%;
  transform: rotate(1.5deg);

  @media ${themes.primary.media.onlyLaptop} {
    top: 0;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    top: 8%;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 60%;
    top: 15%;
    right: -5%;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    overflow: hidden;
    width: calc(100% + 10em);
    top: 90%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    top: 105%;
    width: calc(100%);
  }
`;
