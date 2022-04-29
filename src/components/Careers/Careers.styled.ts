import styled from "styled-components";
import themes from "../../utils/themes";

export const MainTitle = styled.h1`
  margin-top: 6.75rem;
  margin-bottom: 3.438rem;
  font-size: ${themes.primary.font.size.bigTitle};
  font-weight: ${themes.primary.font.weight.normal};
  text-align: center;
  @media ${themes.primary.media.maxTablet} {
    font-size: 3.6em;
    margin-top: 3.75rem;
    margin-bottom: 2.1rem;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 2.3em;
  }
`;

export const TicketWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  justify-items: center;
  @media ${themes.primary.media.maxTabletLandScape} {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;
