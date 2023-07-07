import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 113px);
  margin: 0 auto;
  padding: 0 50px;
  overflow: hidden;
  font-family: ${themes.primary.font.family.namu};

  @media (min-width: 2560px) {
    max-width: 2560px;
    margin: 0 auto;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 0 20px;
  }
`;

export const MediaContainer = styled.div`
  height: max-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 60px;
  margin-left: -50px;
  width: 100vw;
  border-top: 1px solid ${themes.primary.colors.loaderSpinner};

  @media ${themes.primary.media.maxMobile} {
    border-top: none;
    margin-top: 35px;
    margin-left: -20px;
    display: grid;
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
`;
