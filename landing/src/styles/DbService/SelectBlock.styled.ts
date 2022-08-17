import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 16.6em;
  margin-left: 5%;
`;

export const Subtitle = styled.h2`
  margin: 0;
  padding-top: 2.3em;
  line-height: 56px;
  font-size: ${themes.primary.font.size.aboutUsSubtitle};
  text-transform: uppercase;
  width: fit-content;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.quaternary};
  }
`;

export const TextContent = styled.div`
  font-size: 2em;
  line-height: 160%;
  margin-top: 1.5em;
  width: fit-content;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }
  
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 109em;
  right: 9.5em;
  width: 38.5%;
  height: 51.7%;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 40%;
    top: 95em;
    right: 2.5em;
  }
`;
