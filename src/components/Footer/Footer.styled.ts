import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 40em;
  display: flex;
  align-items: center;
`;

export const WebAddressContainer = styled.div``;

export const WebAddress = styled.p`
  font-size: 1.4em;
  font-family: ${themes.primary.font.family.mulish};
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
`;

export const IconContainer = styled.div`
  margin: 0 1.5em;
  position: relative;
  width: 2.5em;
  height: 2.5em;
  &:hover {
    cursor: pointer;
  }
`;
