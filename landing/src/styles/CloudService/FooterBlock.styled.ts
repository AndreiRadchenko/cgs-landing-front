import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 8.75em;
  padding-bottom: 6.94em;
  position: relative;

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-bottom: 0em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 6.8125em;
    padding-bottom: 0;

    & > a {
      font-size: 1em !important;
      padding: 1.195em 2.789em !important;
    }
    ::before {
      content: "";
      position: absolute;
      top: -1.75em;
      left: -30px;
      width: 130%;
      height: 1px;
      background-color: #8f8e93;
    }
  }
`;

export const Content = styled.div``;

export const Image = styled.img`
  position: absolute;
  right: 1.625em;
  bottom: 1em;
  width: 25.75em;
  height: 25em;

  @media ${themes.primary.media.maxTabletLandScape} {
    position: relative;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 23.125em;
    height: auto;
    top: 1em;
    left: -1.25em;
  }
`;
