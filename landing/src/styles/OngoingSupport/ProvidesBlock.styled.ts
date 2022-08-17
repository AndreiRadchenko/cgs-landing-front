import styled from "styled-components";
import themes from "../../utils/themes";
import providesBgi from "../../../public/OngoingSupport/providesBgi.png";

export const Container = styled.div`
  margin-top: 16.67em;
  position: relative;
`;

export const Bgi = styled.div`
  background-image: url(${providesBgi.src});
  background-position: 100 100;
  background-size: contain;
  background-repeat: no-repeat;

  width: 107.64vw;
  height: 39vw;
  position: absolute;
  left: -4.3em;
  top: 19.5em;
`;

export const Title = styled.h2`
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${themes.primary.font.size.secondaryServicesTitle};
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: ${themes.primary.font.size.faqQuestion};
  line-height: 160%;
  text-transform: uppercase;
  color: ${themes.primary.colors.mainGradientColor2};
  margin: 0;
`;

export const Text = styled.p`
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  max-width: 18em;
  margin: 0;
  margin-top: 0.45em;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 5.67em;

  & > div {
    margin-bottom: 8.08em;

    flex-basis: 28.5%;

    &:nth-child(4) {
      margin-left: 13.5em;
    }

    &:nth-child(2) {
      margin-top: 7.17em;
    }

    &:nth-child(3) {
      & > p {
        max-width: 19em;
      }
    }

    &:last-child {
      margin-right: 13em;
    }
  }
`;
