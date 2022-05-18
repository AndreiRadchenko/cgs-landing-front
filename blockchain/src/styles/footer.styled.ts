import styled from "styled-components";
import themes from "../utils/themes";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 14em;
  flex-direction: column;
  align-items: center;
  margin-bottom: -2.5em;
`;

export const Header = styled.h2`
  font-family: ${themes.primary.font.family.goldman};
  font-size: ${themes.primary.font.size.bigHeader};
  color: ${themes.primary.colors.textColor};
  text-align: center;
`;

export const ImagePosition = styled.div`
  width: 115%;
  display: flex;
  justify-content: flex-end;
`;

export const FooterNav = styled.div`
  background: #47367c;
  height: 10em;
  width: 115%;
  margin-top: -8em;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & svg {
    cursor: pointer;
  }
  & svg:hover g path {
    fill: ${themes.primary.colors.allGreen};
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

export const Email = styled.p`
  position: absolute;
  left: 5em;
  font-weight: 200;
  font-size: 1.1em;
  font-family: ${themes.primary.font.family.montserrat};
  color: ${themes.primary.colors.textColor};
`;
