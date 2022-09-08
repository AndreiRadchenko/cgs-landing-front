import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 16.125em;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5.16em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 11.25em;
    margin-bottom: 3.125em;
    flex-direction: column;
  }
`;

export const TextContent = styled.div`
  & > a {
    font-size: 1.125em;
    margin-top: 2.9em;

    @media ${themes.primary.media.maxMobile} {
      font-size: 1em;
      margin-top: 2.19em;
      padding: 1.195em 1.31em;
    }
  }
`;

export const Image = styled.img`
  position: relative;
  right: 3.875em;

  @media ${themes.primary.media.maxMobile} {
    top: 0.94em;
    left: 2.81em;

    width: 19.31em;
  }
`;

export const SubtitleWrapper = styled.div`
  line-height: 140%;
  width: 85%;
  font-size: 0.75em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.6em;
    line-height: 132%;
  }
`;
