import styled from "styled-components";
import themes from "../../../utils/themes";

export const MessengersContainer = styled.div`
  @media ${themes.primary.media.maxMobile} {
    padding-top: 51px;
    padding-bottom: 50px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 0;
  }
`;
