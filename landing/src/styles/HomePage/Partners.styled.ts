import styled from "styled-components";
import themes from "../../utils/themes";

export const PartnersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.8fr 1.1fr 0.9fr 1fr;
  column-gap: 60px;
  row-gap: 10px;
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

export const PartnerImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 6rem;
`;

export const Image = styled.img`
  width: 95%;
  max-height: 85%;
  object-fit: contain;

  @media ${themes.primary.media.maxTabletLandScape} {
    height: auto;
    width: 85%;
  }
`;
