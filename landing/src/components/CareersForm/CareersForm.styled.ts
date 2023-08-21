import themes from "./../../utils/themes";
import styled from "styled-components";

export const FormContainter = styled.div`
  width: 45em;
  height: 417px;

  @media ${themes.primary.media.maxMobile} {
    width: 395px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 361px;
    width: 335px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 295px;
  }
`;
