import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 15.84em;
`;

export const Title = styled.h2`
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${themes.primary.font.size.secondaryServicesTitle};
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;
`;

export const TextWrapper = styled.div`
  margin: 4.67em 6.58em 0 0;
  padding: 1em 0 0 1.59em;
  display: flex;
`;

export const Subtitle = styled.p`
  font-size: ${themes.primary.font.size.secondary};
  line-spacing: 160%;
  margin: 0;
  padding-left: 1.66em;
  position: relative;
`;

export const Text = styled.p`
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  margin: 1.28em 0 0 1.05em;
  max-width: 19.45em;
`;

export const Svg = styled.img`
  position: absolute;
  top: -0.1em;
  left: -0.1em;
  max-width: 1.5em;
`;

export const Bgi = styled.img`
  position: absolute;
`;

export const Wrapper = styled.div`
  position: relative;
  &:first-child {
    margin-right: 7.5em;
    & img {
      top: -0.4em;
    }

    & > img {
      top: 14.85em;
      left: 17.33em;
    }
  }

  &:nth-child(2) {
    margin-top: 13.67em;
    margin-right: 4.8em;

    & > img {
      bottom: 15.2em;
      left: 22.6em;
    }
  }
`;
