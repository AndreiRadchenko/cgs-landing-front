import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 25em;
  @media ${themes.primary.media.maxMobile} {
    margin-block: 4em 3.375em;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 3.3em;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
  max-width: 9.3em;

  @media ${themes.primary.media.maxMobile} {
    display: none;
    font-size: 1.5em;
    line-height: 132%;
  }
`;

export const Icon = styled.img`
  display: flex;
  margin-right: 0.3em;

  @media ${themes.primary.media.maxTabletLandScape} {
    animation: none;
  }
`;

export const ContentLayout = styled.div`
  margin-top: 3.5em;
  width: 100%;
  display: flex;
  gap: 2em;

  @media ${themes.primary.media.maxServiceWeb} {
    justify-content: space-between;
  }

  @media ${themes.primary.media.minPCFullHD} {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.minPC} {
    justify-content: space-between;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 1em;
    width: 100%;
    flex-direction: column;
    row-gap: 1.25em;
  }

  @media ${themes.primary.media.maxMobile} {
    row-gap: 2.125em;
  }
`;

export const HaveContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
  flex: 1 1 33.33%;
`;

export const ItemApp = styled.div`
  width: 285px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};

  h3 {
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 1.85em;
    line-height: 120%;
    margin-bottom: 16px;
  }
  p {
    margin-top: 11px;
    font-size: 1.35em;
    line-height: 160%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 335px;

    h3 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
    }
  }
`;
