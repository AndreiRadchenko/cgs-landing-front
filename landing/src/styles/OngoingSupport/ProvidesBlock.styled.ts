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
  height: 39.6vw;
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

  @media (max-width: 1299px) {
    column-gap: 5em;
  }

  @media (max-width: 1299px) {
    column-gap: 3.5em;
    width: 89%;
    top: -11em;
  }

  @media (max-width: 1179px) {
    top: -12em;
    width: 87%;
    column-gap: 2em;
  }

  & p {
    @media (max-width: 799px) {
      margin-top: 0;
    }
  }

  & > div {
    margin-bottom: 8.08em;
    flex-basis: 28.5%;

    @media (max-width: 1299px) {
      margin-bottom: 6em;
    }

    @media (max-width: 1199px) {
      margin-bottom: 4em;
    }

    @media (max-width: 1063px) {
      margin-bottom: 2.8em;
    }

    @media (max-width: 862px) {
      margin-bottom: 2em;
    }

    @media (max-width: 799px) {
      margin-bottom: 3em;
    }

    &:nth-child(4) {
      margin-left: 13.5em;

      @media (max-width: 1299px) {
        margin-left: 11em;
      }

      @media (max-width: 1199px) {
        flex-basis: 30%;
        margin-left: 8em;
      }

      /* @media (max-width: 1179px) {
        flex-basis: 35%;
        margin-left: 4em;
      } */

      @media (max-width: 1171px) {
        margin-left: 2em;
        flex-basis: 40%;
      }

      @media (max-width: 864px) {
        margin-left: 0em;
        flex-basis: 45%;
      }
    }

    &:nth-child(2) {
      margin-top: 7.17em;

      @media (max-width: 1199px) {
        flex-basis: 33%;
      }

      @media (max-width: 1063px) {
        margin-top: 5em;
      }

      @media (max-width: 991px) {
        margin-top: 8em;
      }

      @media (max-width: 938px) {
        margin-top: 5em;
      }
    }

    &:nth-child(3) {
      & > p {
        max-width: 19em;
      }

      @media (max-width: 864px) {
        flex-basis: 32%;
        margin-left: -0.5em;
      }
    }

    &:last-child {
      margin-left: auto;
      margin-right: 17em;

      @media (max-width: 1299px) {
        margin-right: 15em;
      }

      @media (max-width: 1199px) {
        flex-basis: 35%;
        margin-right: 8em;
      }

      @media (max-width: 1171px) {
        margin-right: 4em;
        flex-basis: 40%;
      }

      @media (max-width: 864px) {
        margin-right: 1em;
        flex-basis: 45%;
      }
    }
  }
`;
