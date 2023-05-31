import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 100vh;
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

  @media ${themes.primary.media.maxServiceWeb} {
    margin-top: 90px;
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
