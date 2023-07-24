import styled from "styled-components";
import themes from "../../../utils/themes";

export const Title = styled.h3`
  font-size: 2.5em;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;
  max-width: 70%;

  br {
    display: none;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 132%;
    margin-bottom: 10px;
    max-width: 100%;

    br {
      display: block;
    }
  }
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.5em;
  line-height: 160%;
  margin: 0.833em 0 1.667em;
  max-width: 70%;
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.125em;
    margin: 10px 0 28px;
    max-width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;
