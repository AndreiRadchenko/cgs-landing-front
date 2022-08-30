import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 15em;
  display: flex;
  justify-content: space-between;
  margin-bottom: 6.4em;
`;

export const TextContent = styled.div`
  & > a {
    margin-top: 2.9em;
  }
`;

export const Image = styled.img`
  position: relative;
  right: 4.8em;
`;

export const SubtitleWrapper = styled.div`
  margin-top: 6.2em;
  line-height: 56px;
  width: 85%;

  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 0.85em;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 6em;
`;
