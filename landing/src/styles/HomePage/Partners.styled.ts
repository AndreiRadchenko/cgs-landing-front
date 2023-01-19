import styled from "styled-components";
import themes from "../../utils/themes";

export const PartnersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 60px;
  row-gap: 50px;
  margin: 149px 0 120px;

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-block: 70px 60px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    column-gap: 40px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    column-gap: 20px;
    margin-block: 90px 120px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    margin-block: 50px 70px;
  }
`;
