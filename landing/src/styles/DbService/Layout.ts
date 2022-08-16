import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  padding: 0 3.6%;
  font-family: ${themes.primary.font.family.namu};
  background-color: ${themes.primary.colors.blogBackground};
  overflow: hidden;
  @media ${themes.primary.media.minPC} {
    padding: 0 5%;
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding: 0 7%;
  }
`;

export const Subtitle = styled.h2`
  margin: 0;
  line-height: 56px;
  font-size: ${themes.primary.font.size.aboutUsSubtitle};
  text-transform: uppercase;
  width: 50%;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.quaternary};
  }
`;
