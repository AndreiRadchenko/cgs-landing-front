import styled from "styled-components";
import themes from "../../utils/themes";
import providesBgi from "../../../public/OngoingSupport/providesBgi.png";

export const Container = styled.div`
  margin-top: 12.5em;
  position: relative;
`;

export const BackgroundWrapper = styled.div`
  background-image: url(${providesBgi.src});
  background-position: 100 100;
  background-size: contain;
  background-repeat: no-repeat;

  width: 115.9%;
  height: 47.5em;
  position: relative;
  left: -4.3em;
  top: 11.3em;
`;

export const Title = styled.h2`
  font-weight: inherit;
  font-size: 2.5em;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 1.25em;
  line-height: 160%;
  text-transform: uppercase;
  color: ${themes.primary.colors.mainGradientColor2};
  margin: 0;
`;

export const Text = styled.p`
  font-size: 1.125em;
  line-height: 160%;
  max-width: 18em;
  margin: 0;
  margin-top: 0.45em;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 9em;
  position: relative;
  top: -8em;
  left: -1em;
  width: 95%;
  margin: 0 auto;
  justify-content: space-around;

  @media (max-width: 1340px) {
    top: -10em;
    column-gap: 4em;
  }

  @media (max-width: 1000px) {
    left: 0.5em;
    width: 90%;
    column-gap: 0em;
  }

  & > div {
    margin: 0;
    margin-bottom: 8.08em;

    @media (max-width: 1400px) {
      margin-bottom: 6em;
    }

    @media (max-width: 1340px) {
      margin-bottom: 4em;
      max-width: 17em;
    }

    @media (max-width: 1000px) {
      margin-bottom: 1em;
      max-width: 15em;
    }

    &:nth-child(4) {
      margin-left: 5em;

      @media (max-width: 1340px) {
        max-width: 25em;
      }

      @media (max-width: 1000px) {
        margin: 0;
      }
    }

    &:nth-child(2) {
      margin-top: 7.17em;

      @media (max-width: 1200px) {
        margin-top: 5em;
      }
    }

    &:nth-child(3) {
      & > p {
        max-width: 19em;
      }
    }

    &:last-child {
      margin-right: 6em;

      @media (max-width: 1340px) {
        max-width: 25em;
      }

      @media (max-width: 1000px) {
        margin: 0;
      }
    }
  }
`;
