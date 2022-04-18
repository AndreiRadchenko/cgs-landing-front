import styled from "styled-components";
import themes from "../../utils/themes";

export const TicketButton = styled.div`
  background-image: url("/ticket-button.png");
  background-repeat: no-repeat;
  color: black;
  cursor: pointer;
  width: 14em;
  height: 4.8em;
  margin-left: -1.125rem;
  margin-bottom: -1.063rem;
  @media${themes.primary.media.maxTablet} {
    background-size: contain;
    background-repeat: space;
    margin-right: -0.938rem;
    margin-bottom: -1.25rem;
  }
  @media${themes.primary.media.maxLowScreenMobile} {
    width: 10.1em;
  }
`;
