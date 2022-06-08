import styled from "styled-components";
import themes from "../utils/themes";
import { floatAnimation } from "./animations";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 14em;
  flex-direction: column;
  align-items: center;
  margin-bottom: -2.5em;
  position: absolute;
  right: 0;
  left: 0;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1rem;
  }
`;

export const Header = styled.h2`
  font-family: ${themes.primary.font.family.goldman};
  font-size: ${themes.primary.font.size.bigHeader};
  color: ${themes.primary.colors.textColor};
  text-align: center;
`;

export const ImagePosition = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 55%;
  position: relative;
  justify-content: flex-end;

  @media ${themes.primary.media.onlyTabletLandScape} {
    grid-template-columns: 62%;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    grid-template-columns: 70%;
  }
  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: 120%;
  }
  @media ${themes.primary.media.minLaptop} {
    margin-bottom: -2em;
  }
  @media ${themes.primary.media.minPC} {
    margin-bottom: 0;
  }
`;

export const FooterNav = styled.div`
  background: #47367c;
  height: 8em;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & svg {
    cursor: pointer;
    &:hover g path {
      fill: ${themes.primary.colors.allGreen};
    }
  }
  @media ${themes.primary.media.minLaptop} {
    height: 10em;
    & svg:hover g path {
      fill: ${themes.primary.colors.allGreen};
    }
  }
  @media ${themes.primary.media.maxMobile} {
    height: 11em;
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

  @media ${themes.primary.media.maxTabletPortrait} {
    margin: 0 1.5em 1.5em;
    width: 2em;
    height: 2em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 0 2em;
    width: 3.1em;
    height: 3.1em;
  }
`;

export const Email = styled.a`
  position: absolute;
  left: 5em;
  font-weight: 200;
  font-size: ${themes.primary.font.size.vistaco};
  font-family: ${themes.primary.font.family.montserrat};
  color: ${themes.primary.colors.textColor};

  @media ${themes.primary.media.onlyTabletLandScape} {
    left: 3em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: ${themes.primary.font.size.primary};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.vistaco};
    left: 0;
    bottom: 1rem;
    width: 100%;
    text-align: center;
  }
`;

export const MarginBlock = styled.div`
  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 5rem;
  }
`;

export const CosmonautBgWrapper = styled.div`
  width: 100%;
  height: 600px;
  bottom: 0;
  position: absolute;

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 500px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    height: 450px;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 90%;
    left: 10%;
    height: 600px;
  }
  @media ${themes.primary.media.minTablet} {
    height: 500px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 300px;
  }
`;

export const CosmonautWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 600px;
  top: 8%;
  left: 25%;
  animation: ${floatAnimation} 5s infinite ease-in-out;
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 450px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    top: 13%;
    width: 400px;
    height: 500px;
  }
  @media ${themes.primary.media.maxMobile} {
    left: calc(35% - 1rem);
    width: 500px;
    height: 700px;
  }
  @media ${themes.primary.media.minTablet} {
    left: calc(40% - 4rem);
    width: 400px;
    height: 550px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    top: 10%;
    width: 300px;
    height: 350px;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
`;
