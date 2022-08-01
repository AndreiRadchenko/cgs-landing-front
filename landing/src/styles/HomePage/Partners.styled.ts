import styled from "styled-components";
import themes from "../../utils/themes";

export const PartnersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 77px;
  row-gap: 65px;
  margin: 10.85em 0 11.67em;
`;

export const PartnerImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
`;

// export const Image = styled.img`
//   @media ${themes.primary.media.maxTabletLandScape} {
//     height: auto;
//     width: 85%;
//   }
// `;
