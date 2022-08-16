import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 8em;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
`;

export const TextContent = styled.div``;

export const Image = styled.img`
  position: relative;
  transform: translate(2%, -1%);
`;

export const SubtitleWrapper = styled.div`
  margin-top: 9em;
  line-height: 56px;
  margin-bottom: 4em;

  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 0.85em;
  }
`;
