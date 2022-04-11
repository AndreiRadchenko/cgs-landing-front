import themes from "./../../utils/themes";
import styled from "styled-components";

export const FormTitle = styled.h1`
  font-size: ${themes.primary.font.size.quaternary};
  font-weight: ${themes.primary.font.weight.bold};
  text-align: center;
  margin-bottom: 4rem;
`;

export const FormWrapper = styled.section`
  display: flex;
  @media${themes.primary.media.maxTablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormImage = styled.div`
  background-image: url("/searching-for.png");
  width: 43.063rem;
  height: 42.188rem;
  background-repeat: space;
  margin-left: 6.125rem;
  @media${themes.primary.media.maxTabletLandScape} {
    width: 28.125rem;
    height: 29rem;
    background-repeat: round;
    margin-left: 4.125rem;
  }
  @media${themes.primary.media.maxTabletPortrait} {
    margin-left: 1.125rem;
  }
  @media${themes.primary.media.minTablet} {
    margin-left: 0;
  }
  @media${themes.primary.media.maxLowScreenMobile} {
    width: 22.625rem;
    height: 23.313rem;
  }
`;
