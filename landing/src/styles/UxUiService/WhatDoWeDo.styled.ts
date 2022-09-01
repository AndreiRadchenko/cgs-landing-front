import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  font-size: 1rem;
  font-weight: ${themes.primary.font.weight.heavy};
  margin-top: 11.875em;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: ${themes.primary.font.size.reviewTitle};
  line-height: 140%;
  text-transform: uppercase;
  font-weight: inherit;
`;

export const SubBlockContainer = styled.div`
  margin-top: 3.5em;
  padding-left: 1.19em;
  display: flex;
  justify-content: space-between;

  & > div {
    position: relative;
    flex-basis: 30%;

    &:nth-child(2) {
      margin-top: 9.5em;

      & > img {
        position: absolute;
        left: 15.94em;
        top: -5.875em;
      }
    }

    &:first-child > img {
      position: absolute;
      left: 13em;
      top: 11.875em;
    }
  }
`;

export const Subtitle = styled.h3`
  margin: 0.75em 0 0;
  padding-left: 2.25em;
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  letter-spacing: 0.05em;
  position: relative;
`;

export const Text = styled.p`
  font-size: 1.125em;
  line-height: 160%;
  margin: 1.44em 0 0;
`;

export const Svg = styled.img`
  position: absolute;
  top: -0.2em;
  left: -0.9em;
`;

export const Image = styled.img``;
