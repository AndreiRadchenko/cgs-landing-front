import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 11.875em;
`;

export const Title = styled.h2`
  font-weight: inherit;
  font-size: 2.5em;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;
`;

export const TextWrapper = styled.div`
  margin: 4.67em 4.94em 0 0;
  padding: 0.75em 0 0 1.1875em;
  display: flex;
`;

export const Subtitle = styled.p`
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  margin: 0;
  padding-left: 1.8em;
  position: relative;
`;

export const Text = styled.p`
  font-size: 1.125em;
  line-height: 160%;
  margin: 1.28em 0 0 1.05em;
  max-width: 19.45em;
`;

export const Svg = styled.img`
  position: absolute;
  top: -0.1em;
  left: -0.5em;
  max-width: 1.8em;
`;

export const Bgi = styled.img`
  position: absolute;
`;

export const Wrapper = styled.div`
  position: relative;
  &:first-child {
    margin-right: 6.1em;
    & img {
      top: -0.4em;
    }

    & > img {
      top: 14.85em;
      left: 13.03em;
    }
  }

  &:nth-child(2) {
    margin-top: 13.67em;
    margin-right: 4.8em;

    & > img {
      bottom: 15.1em;
      left: 17em;
    }
  }
`;
