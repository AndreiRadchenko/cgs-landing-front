import styled from "styled-components";
import themes from "../../../utils/themes";

export const Title = styled.h1`
  font-size: 4.125em;
  line-height: 132%;
  display: inline-block;

  margin: 0;
  text-transform: uppercase;
  font-weight: inherit;
  width: 12.3em;

  @media ${themes.primary.media.onlyTabletPortrait} {
    max-width: 10em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.5em;
    line-height: 48px;
    width: 100%;
  }
`;

export const Description = styled.div`
  font-size: 1.375em;
  line-height: 160%;
  margin: 1em 0 1.8185em;
  max-width: 600px;

  @media (min-width: 1920px) {
    margin-top: -3em;
  }

  @media ${themes.primary.media.minPC} {
    max-width: 40%;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    max-width: 60%;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    max-width: 95%;
    margin: 1em 0 1.75em;
  }

  @media (max-width: 475px) {
    max-width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;
