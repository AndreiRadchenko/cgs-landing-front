import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${themes.primary.colors.primary};
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 5em;
  text-align: center;
  max-width: 10em;

  @media ${themes.media.maxTabletPortrait} {
    font-size: 4em;
  }

  @media ${themes.media.maxMobile} {
    font-size: 3em;
    max-width: 11em;
  }
`;

export const SubTitle = styled.h4`
  margin: 1em 0 0 0;
  font-size: 3em;
  text-align: center;
  font-weight: ${themes.primary.font.weight.light};

  @media ${themes.media.maxTabletPortrait} {
    font-size: 2.5em;
  }

  @media ${themes.media.maxMobile} {
    font-size: 2.2em;
    max-width: 14em;
  }
`;

export const ButtonContainer = styled.div`
  position: relative;
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 6em;
  height: 7.2em;
  right: -4em;
  bottom: -1.9em;
  z-index: -1;

  @media ${themes.media.maxTabletPortrait} {
    width: 11em;
    height: 12.2em;
    right: -6em;
    bottom: -4.9em;
  }

  @media ${themes.media.maxMobile} {
    width: 13em;
    height: 14.2em;
    right: -4em;
    bottom: -8.9em;
  }
`;
