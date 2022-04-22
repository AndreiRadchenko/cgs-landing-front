import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.secondary};
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
`;

export const Title = styled.h2`
  font-size: 4em;
  text-align: center;
  margin: 0;
  max-width: 14em;

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 4em;
    max-width: 10em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 3.1em;
  }
`;

export const SubTitle = styled.h4`
  font-size: 2em;
  font-weight: 400;
  text-align: center;
  font-weight: ${themes.primary.font.weight.light};

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 2.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.2em;
    max-width: 14em;
  }
`;

export const ButtonContainer = styled.div`
  position: relative;
  font-family: ${themes.primary.font.family.sourceCode};
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 10em;
  height: 13em;
  right: -6.5em;
  bottom: -5.8em;
  z-index: 10;

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 11em;
    height: 12.2em;
    right: -6em;
    bottom: -4.9em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 13em;
    height: 14.2em;
    right: -4em;
    bottom: -8.1em;
  }
`;
