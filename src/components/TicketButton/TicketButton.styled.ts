import styled from "styled-components";
import themes from "../../utils/themes";

export const TicketButton = styled.div`
  background-image: url("/ticket-button.png");
  color: black;
  cursor: pointer;
  width: 167px;
  height: 66px;
  margin-left: -18px;
  margin-bottom: -17px;
  @media${themes.primary.media.maxTablet} {
    background-size: contain;
    background-repeat: space;
    margin-right: -15px;
    margin-bottom: -20px;
  }
`;
