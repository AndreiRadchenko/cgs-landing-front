import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 13.5em;
`;

export const ContentWrapper = styled.div`
  margin-top: 4.1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TextBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 50%;
  }
`;

export const TextContent = styled.div`
  font-size: 1.83em;
  line-height: 160%;
  margin-left: 1.5em;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.inBlockMaxTableText};
  }
`;

export const Icon = styled.img`
  display: flex;
  padding-top: 1.8em;
`;

export const Subtitle = styled.h3`
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 1.39388px;
  margin-top: 1rem;
`;
