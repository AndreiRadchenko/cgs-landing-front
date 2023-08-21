import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 7.7em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    padding-top: 1em;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 44.5%;

  @media (max-width: 1360px) {
    width: 53%;
  }

  @media ${themes.primary.media.minPC} {
    width: 48%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 53%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    padding-bottom: 48px;

    & a {
      font-size: 1em !important;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-top: 12px;
  width: 45.31em;
  height: 29.19em;

  @media ${themes.primary.media.minPCFullHD} {
    position: absolute;
    right: -7%;
    width: 36em;
    height: 23.1em;
  }

  @media (max-width: 1370px) {
    width: 24em;
    height: 15.5em;
    margin-top: 50px;
  }

  @media (max-width: 915px) {
    width: 20em;
    height: 13em;
  }
  @media (max-width: 784px) {
    width: 19em;
    height: 12em;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    width: 385px;
    height: 249px;
    margin-top: 0;
    margin-left: 17%;
  }
`;
