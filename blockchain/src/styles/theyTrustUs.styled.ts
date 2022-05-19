import styled from "styled-components";
import themes from "../utils/themes";

export const UfoBlock = styled.div`
  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 105%;
  }

  @media ${themes.primary.media.minPC} {
    width: 90%;
  }
`;

export const LogosGrid = styled.div`
  display: grid;
  margin-top: ${themes.primary.spacing.oneSix};
  grid-template-columns: 1fr 1fr;
  row-gap: 4em;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & div img {
    cursor: pointer;
  }

  @media ${themes.primary.media.minLaptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
