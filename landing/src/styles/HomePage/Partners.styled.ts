import styled from "styled-components";
import themes from "../../utils/themes";

export const PartnersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.8fr 1.1fr 0.9fr 1fr;
  column-gap: 60px;
  row-gap: 60px;
  margin: 75px 0 85px;

  @media ${themes.primary.media.minPCFullHD} {
    margin: 85px 0 160px;
    row-gap: 60px;
  }

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

export const PartnerImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 8em;
  position: relative;
  height: 90px;

  @media ${themes.primary.media.minPCFullHD} {
    height: 106px;
    width: 85%;
  }
`;
