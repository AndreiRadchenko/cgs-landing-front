import styled from "styled-components";
import themes from "../../utils/themes";

export const PartnersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 65px;
  margin: 11em 0;
`;

export const PartnerImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: auto;
  width: auto;
  max-height: 60px;
`;

export const Image = styled.img`
  @media ${themes.primary.media.maxTabletLandScape} {
    height: auto;
    width: 85%;
  }
`;
