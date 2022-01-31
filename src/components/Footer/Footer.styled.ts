import styled from "styled-components";
import themes from "../../utils/themes";
import Decoration from "../Decoration/Decoration";

export const Container = styled.div`
  background-color: ${themes.primary.colors.secondary};
  height: 120px;

  display: flex;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
`;

export const WebAddressContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const WebAddress = styled.a`
  font-size: 1.4em;
  font-family: ${themes.primary.font.family.mulish};
`;

export const SocialLinksContainerDecoration = styled.div`
  display: flex;
  margin-left: 12em;
  align-items: center;
  height: 3em;

  position: relative;
`;

export const DecorationFooterLinks = styled(Decoration)`
  height: 2.3em;
  width: 22em;
  position: absolute;
  top: 45%;
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
`;
