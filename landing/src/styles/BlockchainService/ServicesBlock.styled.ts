import styled from "styled-components";
import themes from "../../utils/themes";
import BlockchainServices from "../../../public/BlockchainServicePage/BlockchainServices.svg";
import MobileService from "../../../public/BlockchainServicePage/Services-mobile-bg.svg";

export const Container = styled.div`
  margin-top: 11.94em;
  @media ${themes.primary.media.maxMobile} {
    margin-top: 8em;
  }
`;

export const Title = styled.h2`
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 132%;
  }
  margin: 0;
  font-size: 2.5em;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 140%;
  text-transform: uppercase;
  max-width: 13.75em;
`;

export const SubTextContainer = styled.div`
  @media ${themes.primary.media.maxMobile} {
    background-image: url(${MobileService.src});
    margin: 8px 0 0 -4.5em;
    width: 27.2em;
    height: 11.94em;
  }

  width: 91.375em;
  height: 11.625em;
  margin: 4.625em -6em 0 -6.5em;
  background-image: url(${BlockchainServices.src});
  background-size: cover;
  background-position: bottom right;
  background-repeat: no-repeat;
`;

export const SubTextContent = styled.div`
  @media ${themes.primary.media.maxMobile} {
    display: block;
    padding: 6px 0 0 0em;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 7em;
  padding: 0.4em 0 0 5em;
`;

export const SubText = styled.p`
  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 0;
    padding-top: 4px;
    padding-left: 6em;
  }
  font-size: 1.5em;
  line-height: 233%;
  text-transform: uppercase;
  margin: 0 0 10px 4.5em;
  padding: 0;
`;

export const DescriptionContainer = styled.div`
  @media ${themes.primary.media.maxMobile} {
    display: block;
    padding: 0;
  }
  margin-top: 12.5em;
  padding: 0 2.75em;
  display: flex;
`;

export const Image = styled.img`
  @media ${themes.primary.media.maxMobile} {
    width: 22.19em;
    height: auto;
    margin-left: -10px;
  }
  width: 40em;
  height: 31.25em;
  margin: 0;
`;

export const Description = styled.div`
  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 3.125em 0 0;
    max-width: 90%;
  }
  font-size: 1.375em;
  line-height: 160%;
  margin: 6.1em 0 0;
  max-width: 27.95em;
`;
