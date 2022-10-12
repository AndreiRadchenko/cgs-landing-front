import styled from "styled-components";
import themes from "../../utils/themes";
import BlockchainServices from "../../../public/BlockchainServicePage/BlockchainServices.svg";
import MobileService from "../../../public/BlockchainServicePage/Services-mobile-bg.svg";

export const Container = styled.div`
  margin-top: 11.94em;
  @media ${themes.primary.media.maxMobile} {
    margin-top: 4em;
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
  height: 14.875em;
  margin: 2.625em -6em 0 -3.2em;
  background-image: url(${BlockchainServices.src});
  background-size: cover;
  background-position: bottom right;
  background-repeat: no-repeat;

  @media ${themes.primary.media.minPC} {
    margin-left: -3.5em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 110em;
    height: 17.625em;
    margin-left: -4em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 0.8rem;
    margin-left: -8em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    background-image: url(${MobileService.src});
    margin: 8px 0 0 -5.5em;
    width: 35em;
    height: 19.296875em;
  }
`;

export const SubTextContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 13em;
  padding-left: 5em;

  @media ${themes.primary.media.minPC} {
    padding-top: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-left: 9em;
    column-gap: 15em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: block;
    padding: 5px 0 0 0;
  }
`;

export const SubText = styled.p`
  font-size: 1.5em;
  line-height: 233%;
  text-transform: uppercase;
  margin: -12px 0 25px 2em;
  padding: 0;

  @media ${themes.primary.media.minPCFullHD} {
    margin-bottom: 40px;
  }

  @media (min-width: 2200px) {
    margin-bottom: 45px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-block: -10px 19px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;
    margin: 0;
    margin-block: -2px 14px;
    padding-left: 9em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: -2px;
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
    margin-top: 2.81em;
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
    margin: 1.565em 0 0;
    width: 21em;

    p {
      display: block;
    }
  }
`;
