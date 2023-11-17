import styled from "styled-components";
import themes from "../../../utils/themes";

export const SocialsContainer = styled.div`
  @media ${themes.primary.media.maxMobile} {
    padding-top: 5px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding-top: 0;
  }
`;
