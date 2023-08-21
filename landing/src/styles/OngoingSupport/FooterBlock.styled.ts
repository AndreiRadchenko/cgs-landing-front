import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 8.8em;
  padding-bottom: 9.5em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 5.56em;
    padding-bottom: 16.5em;
    ::before {
      content: "";
      position: absolute;
      top: -28px;
      left: -30px;
      width: 150%;
      height: 1px;
      background-color: #8f8e93;
      color: black;
    }

    & > a {
      font-size: 1em !important;
      padding: 1.195em 2.91em !important;
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 3.81em;
  width: 26.3em;

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 20.3em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 18.94em;
    bottom: 2.75em;
    right: 1em;
  }
`;
