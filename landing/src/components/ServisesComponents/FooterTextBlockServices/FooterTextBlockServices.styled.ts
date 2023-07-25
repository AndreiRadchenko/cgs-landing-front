import styled from "styled-components";
import themes from "../../../utils/themes";

export const Title = styled.h3`
  font-size: 2.5em;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;
  max-width: 70%;

  &.biggerFontSize {
    font-size: 3.33em;
  }
  &.fullWidth {
    max-width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 132%;
    margin-bottom: 10px;
    max-width: 100%;

    &.biggerFontSize {
      font-size: 24px;
    }
    &.fullWidth {
      max-width: 100%;
    }
  }
`;

export const Text = styled.p`
  padding: 0;
  font-size: 1.5em;
  line-height: 160%;
  margin: 0.833em 0 1.667em;
  max-width: 70%;

  &.blockchain {
    width: 60vw;
  }
  &.biggerFontSize {
    font-size: ${themes.primary.font.size.secondary};
    max-width: 38.5em;
  }
  &.fullWidth {
    max-width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.125em;
    margin: 10px 0 28px;
    max-width: 100%;

    &.blockchain {
      width: 100%;
    }
    &.biggerFontSize {
      font-size: 1.125rem;
    }
    &.fullWidth {
      max-width: 100%;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  &.biggerFontSize {
    font-size: 1.335em;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;

    &.biggerFontSize {
      font-size: 1.5em;
    }
  }
`;
