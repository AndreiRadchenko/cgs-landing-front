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

  width: 115.9%;
  height: 47.5em;
  position: relative;
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
  column-gap: 7em;
  position: relative;
  top: -10em;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 1350px) {
    top: -11em;
  }

  @media (max-width: 1299px) {
    column-gap: 3.5em;
    width: 89%;
    top: -11em;
  }

  @media (max-width: 1134px) {
    column-gap: 2em;
  }

  @media (max-width: 1080px) {
    top: -13em;
  }

  @media (max-width: 1003px) {
    column-gap: 1em;
  }

  & > div {
    margin-bottom: 8.08em;
    flex-basis: 28.5%;

    @media (max-width: 1199px) {
      margin-bottom: 4em;
    }

    @media (min-width: 992px) and (max-width: 1080px) {
      margin-bottom: 1.5em;
    }

    @media (max-width: 953px) {
      margin-bottom: 1.5em;
    }

    & > p {
      @media (max-width: 876px) {
        margin: 0;
      }
    }

    &:nth-child(4) {
      margin-left: 13.5em;

      @media (max-width: 1199px) {
        flex-basis: 30%;
        margin-left: 8em;
      }

      @media (max-width: 1202px) {
        flex-basis: 35%;
        margin-left: 10em;
      }

      @media (max-width: 1134px) {
        flex-basis: 40%;
        margin-left: 5em;
      }

      @media (max-width: 1003px) {
        flex-basis: 49%;
        margin-left: 0;
      }
    }

    &:nth-child(2) {
      margin-top: 7.17em;

      @media (max-width: 1199px) {
        flex-basis: 33%;
      }
    }

    &:nth-child(3) {
      & > p {
        max-width: 19em;
      }

      @media (max-width: 1420px) {
        margin-left: 2em;
        flex-basis: 25%;
      }
      @media (max-width: 1350px) {
        margin-left: auto;
        margin-right: 1em;
        flex-basis: 21%;
      }

      @media (max-width: 1202px) {
        flex-basis: 25%;
      }

      @media (max-width: 1134px) {
        flex-basis: 28%;
      }
    }

    &:last-child {
      margin-left: auto;
      margin-right: 17em;

      @media (max-width: 1420px) {
        margin-right: 15em;
      }
      @media (max-width: 1350px) {
        margin-right: 10em;
      }

      @media (max-width: 1202px) {
        flex-basis: 35%;
        margin-right: 4em;
      }

      @media (max-width: 1134px) {
        flex-basis: 40%;
        margin-right: 1em;
      }

      @media (max-width: 1003px) {
        flex-basis: 48%;
        margin-right: 0;
      }
    }
  }
`;
