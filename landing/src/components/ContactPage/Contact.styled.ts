import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 113px);
  margin: 0 auto;
  padding: 0 67px;
  overflow: hidden;
  font-family: ${themes.primary.font.family.namu};

  @media (min-width: 2560px) {
    max-width: 2560px;
    margin: 0 auto;
  }

  @media ${themes.primary.media.maxPCFullHD} {
    padding: 0 50px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 0 44px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 0 19px;
  }
`;

export const MediaContainer = styled.div`
  height: max-content;
  display: grid;
  grid-template-columns: 5fr 4fr;
  margin-left: -67px;
  margin-top: 91px;
  width: 100vw;
  border-top: 1px solid ${themes.primary.colors.loaderSpinner};

  @media ${themes.primary.media.maxPCFullHD} {
    grid-template-columns: 1fr 1fr;
    margin-top: 65px;
    margin-left: -50px;
  }

  @media ${themes.primary.media.maxMobile} {
    border-top: none;
    margin-top: 90px;
    display: grid;
    margin-left: -45px;
    grid-template-columns: 1fr;
    & > :nth-child(1) {
      grid-row: 1;
    }
    & > :nth-child(2) {
      grid-row: 3;
    }
    & > :nth-child(3) {
      grid-row: 2;
    }
    & > :nth-child(4) {
      grid-row: 4;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 60px;
  }
`;
