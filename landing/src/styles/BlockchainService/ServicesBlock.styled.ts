import styled from "styled-components";
import themes from "../../utils/themes";
import BlockchainServices from "../../../public/BlockchainServicePage/BlockchainServices.svg";
import MobileService from "../../../public/BlockchainServicePage/Services-mobile-bg.svg";

export const Container = styled.div`
  margin-top: 11.94em;
  @media ${themes.primary.media.maxMobile} {
    margin-top: 7em;
  }
`;

export const Title = styled.h2`
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 132%;
  }
  margin: 0;
  font-size: 2.5em;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
  max-width: 13.75em;
`;

export const SubTextContainer = styled.div`
  width: 91.375em;
  height: 11.625em;
  margin: 4.625em -6em 0 -6.5em;
  background-image: url(${BlockchainServices.src});
  background-size: cover;
  background-position: bottom right;
  background-repeat: no-repeat;

  @media ${themes.primary.media.minPC} {
    width: 100em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 110em;
    height: 15.625em;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    font-size: 0.8rem;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    margin-left: -9em;
    width: 78em;
  }

  @media ${themes.primary.media.maxMobile} {
    background-image: url(${MobileService.src});
    margin: 8px 0 0 -4.5em;
    width: 27.2em;
    height: 11.94em;
  }
`;

export const SubTextContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 7em;
  padding: 0.4em 0 0 5em;

  @media ${themes.primary.media.minPC} {
    column-gap: 10.5em;
    padding-top: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-top: 2.6em;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    padding: 2em 0 0 6em;
    column-gap: 9.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    display: block;
    padding: 6px 0 0 0em;
  }
`;

export const SubText = styled.p`
  font-size: 1.5em;
  line-height: 233%;
  text-transform: uppercase;
  margin: 0 0 10px 4.5em;
  padding: 0;

  @media ${themes.primary.media.minPCFullHD} {
    margin-bottom: 27px;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    padding-left: 0em;
    margin: 0 0 3px 1.5em;
    font-size: 1.4em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 0;
    padding-top: 4px;
    padding-left: 6em;
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 12.5em;
  padding: 0 2.75em;
  display: flex;
  justify-content: center;

  @media ${themes.primary.media.onlyTabletPortrait} {
    padding: 0 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-top: 8.625em;
  }
`;

export const Image = styled.img`
  width: 40em;
  height: 31.25em;
  margin: 0;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 28em;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 22.19em;
    height: auto;
    margin-left: -10px;
  }
`;

export const Description = styled.div`
  font-size: 1.375em;
  line-height: 160%;
  margin: 6.1em 0 0;
  max-width: 27.95em;

  p {
    margin: 0;
    display: inline;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    margin: 2em 0 0;
    max-width: 90%;
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 3.125em 0 0;
    width: 21em;

    p {
      display: block;
    }
  }
`;
