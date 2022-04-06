import styled from "styled-components";
import themes from "../../utils/themes";

export const CareersWrapper = styled.div`
  margin: 2.5em auto;
  width: 1100px;
`;

export const MainTitle = styled.h1`
  margin-top: 6.75rem;
  margin-bottom: 3.438em;
  font-size: ${themes.primary.font.size.bigTitle};
  font-weight: ${themes.primary.font.weight.bold};
  text-align: center;
  @media${themes.primary.media.maxTablet} {
    font-size: 3.6em;
    margin-top: 3.75rem;
    margin-bottom: 2.1em;
  }
  @media${themes.primary.media.maxLowScreenMobile} {
    font-size: 2.3em;
  }
`;

export const TicketWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media${themes.primary.media.maxLaptop} {
    justify-content: center;
  }
`;
