import styled from "styled-components";
import themes from "../../utils/themes";
import BlockchainAbout from "../../../public/BlockchainServicePage/BlockchainAbout.svg";

export const Container = styled.div`
  margin-top: 14.88em;
  padding: 4.69em 0 8.375em;

  background-image: url(${BlockchainAbout.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top 100% right 6.75em;

  @media (max-width: 1300px) {
    background-size: 60%;
    background-position: top right;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    background-position: right 30%;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 24em;
    margin: -6.25em 0 0 -0.5em;
    padding: 0 0 18em 1em;
    background-position: bottom center;
    background-size: contain;
  }
`;

export const Title = styled.h2`
  font-size: 2.5em;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 140%;
  text-transform: uppercase;
  max-width: 12em;
  margin-top: 3px;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 132%;
  }
`;
