import styled from "styled-components";
import themes from "../../../utils/themes";

export const AboutsContainer = styled.div`
  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 50px;
    padding-top: 5px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 0;
  }
`;
