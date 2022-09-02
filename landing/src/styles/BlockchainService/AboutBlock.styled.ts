import styled from "styled-components";
import themes from "../../utils/themes";
import BlockchainAbout from "../../../public/BlockchainServicePage/BlockchainAbout.svg";

export const Container = styled.div`
  margin: 13.375em 0 0 0;
  padding: 4.69em 0 8.375em;

  background-image: url(${BlockchainAbout.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top 100% right 6.75em;

  @media ${themes.primary.media.onlyTabletPortrait} {
    padding: 4.5em 0 5em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    background-position: right center;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 24em;
    margin: -6.25em 0 0 -1.5em;
    padding: 0 0 18em 1em;
    background-position: bottom center;
  }
`;

export const Title = styled.h2`
  font-size: 2.5em;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 140%;
  text-transform: uppercase;
  max-width: 12em;
  margin: 0;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 132%;
  }
`;
