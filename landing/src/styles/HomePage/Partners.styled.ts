import styled from "styled-components";
import themes from "../../utils/themes";

export const PartnersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.8fr 1.1fr 0.9fr 1fr;
  column-gap: 60px;
  row-gap: 10px;
  margin: 140px 0 120px;
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
