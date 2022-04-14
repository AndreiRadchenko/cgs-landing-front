import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.form`
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  font-family: ${themes.primary.font.family.roboto};

  @media ${themes.primary.media.maxTabletLandScape} {
    margin: 0;
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  margin: 0 0 1em 0;

  @media ${themes.primary.media.maxTabletLandScape} {
    margin: 0 0 0.2em 0;
    font-size: 3.8em;
  }
  @media ${themes.primary.media.onlyTabletPortrait} {
    margin: 0 0 0.3em 0;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 3.8em;
  }
`;

export const ContentWrapper = styled.div``;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;

  @media ${themes.primary.media.onlyTabletLandScape} {
    button {
      /* background-color: red; */
      width: 12em;
      height: 5em;
      margin-top: 0;
    }
  }
  @media ${themes.primary.media.onlyTabletPortrait} {
    button {
      /* background-color: red; */
      width: 12em;
      height: 5em;
      margin-top: 0;
    }
  }
`;
