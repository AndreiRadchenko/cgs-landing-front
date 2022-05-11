import styled from "styled-components";
import themes from "../../utils/themes";
import Decoration from "../Decoration/Decoration";

export const Container = styled.div`
  margin-top: 15em;
  background-color: ${themes.primary.colors.secondary};
  height: 7.5em;
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-areas: "footer-address footer-social .";

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 0;
    grid-teplate-columns: auto;
    grid-teplate-columns: repeat(2, 1fr);
    grid-template-areas:
      "footer-social"
      "footer-address";
  }
`;

export const Row = styled.div`
  display: flex;

  @media ${themes.primary.media.maxTabletPortrait} {
    justify-content: center;
  }
`;

export const WebAddressContainer = styled.div`
  grid-area: footer-address;
  display: flex;
  align-items: center;

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-left: 0;
  }
`;

export const WebAddress = styled.a`
  font-size: 1.4em;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.light};

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
  }
`;

export const SocialLinksContainerDecoration = styled.div`
  display: flex;
  align-items: center;
  height: 4em;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 50%;

  @media ${themes.primary.media.maxMobile} {
    margin-left: 0;
    height: 7em;
  }
`;

export const DecorationFooterLinks = styled(Decoration)`
  height: 2.3em;
  width: 100%;
  position: absolute;
  top: 45%;
`;

export const SocialLinksContainer = styled.div`
  position: relative;
  grid-area: footer-social;
  justify-self: start;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 50%;

  @media ${themes.primary.media.maxTabletPortrait} {
    justify-self: center;
  }
`;

export const IconContainer = styled.div`
  margin: 0 1.5em;
  position: relative;
  z-index: 3;
  width: 2.5em;
  height: 2.5em;

  &:hover {
    cursor: pointer;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 0 2em;
    width: 3.1em;
    height: 3.1em;
  }
`;
