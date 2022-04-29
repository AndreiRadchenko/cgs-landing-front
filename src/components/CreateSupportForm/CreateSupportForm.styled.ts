import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.form`
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  font-family: ${themes.primary.font.family.gilroy};

  @media ${themes.primary.media.maxTabletLandScape} {
    margin: 0;
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: ${themes.primary.font.weight.extraBold};
  margin: 0 0 2.5rem 0;

  @media ${themes.primary.media.maxTabletLandScape} {
    margin: 0 0 0.5rem 0;
    font-size: 3em;
  }
  @media ${themes.primary.media.onlyTabletPortrait} {
    margin: 0 0 0.5rem 0;
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
      width: 12em;
      height: 5em;
      margin-top: 0;
    }
  }
  @media ${themes.primary.media.onlyTabletPortrait} {
    button {
      width: 12em;
      height: 5em;
      margin-top: 0;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    button {
      width: 12em;
      height: 4em;
      margin-top: 0;
    }
  }
`;
