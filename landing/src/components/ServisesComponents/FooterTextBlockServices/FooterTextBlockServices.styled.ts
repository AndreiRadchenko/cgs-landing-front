import styled from "styled-components";
import themes from "../../../utils/themes";

export const Title = styled.h3`
  font-size: 2.5em;
  font-weight: ${themes.primary.font.weight.heavy};
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

  @media ${themes.primary.media.minPCFullHD} {
    &.webDev {
      font-size: 1.875em;
    }
    &.cloud,
    &.itSupport,
    &.mobileAudit,
    &.fullWidth {
      font-size: 2.1429em;
    }
    &.biggerFontSize {
      font-size: 3em;
    }
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

  @media ${themes.primary.media.minPCFullHD} {
    &.webDev {
      font-size: 1.125em;
    }
    &.cloud,
    &.itSupport,
    &.mobileAudit,
    &.fullWidth {
      font-size: 1.25em;
    }
    &.biggerFontSize {
      font-size: 1.8em;
    }
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

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;
