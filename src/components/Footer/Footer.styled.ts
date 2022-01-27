import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 15em;
  display: flex;
  align-items: center;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const WebAddressContainer = styled.div``;

export const WebAddress = styled.p`
  font-size: 1.4em;
  font-family: ${themes.primary.font.family.mulish};

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
  }
`;

export const SocialLinksContainer = styled.div`
  margin-left: 20em;
  display: flex;
  align-items: center;
  height: 4em;
  background-image: url("/footer_icons_bg.png");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 50%;

  @media ${themes.primary.media.maxMobile} {
    margin-left: 0;
    height: 7em;
  }
`;

export const IconContainer = styled.div`
  margin: 0 1.5em;
  position: relative;
  width: 2.5em;
  height: 2.5em;
  &:hover {
    cursor: pointer;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 0 2em;
    width: 3em;
    height: 3em;
  }
`;
