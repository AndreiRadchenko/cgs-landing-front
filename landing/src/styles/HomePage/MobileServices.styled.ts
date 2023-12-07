import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  display: none;
  @media ${themes.primary.media.maxMobile} {
    display: flex;
    padding-bottom: 5em;
    position: relative;
    margin-top: 75px;
  }

  @media ${themes.primary.media.minTablet} {
    padding-bottom: 5em;
    margin-top: 55px;
  }
`;

export const ServiceWrapper = styled.div`
  border: 1px solid ${themes.primary.colors.headerBorder};
  height: 40em;
  padding: 1.7em;
  position: relative;

  > div {
    text-transform: uppercase;
    font-size: 3em;
  }
  @media ${themes.primary.media.maxMobile} {
    height: 57em;
    padding: 2.25em 2.5em;

    > div {
      font-size: 5em;
    }
  }
  @media ${themes.primary.media.minTablet} {
    height: 37em;
    padding: 1.7em;

    > div {
      font-size: 3.5em;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 303px;
  height: 268px;
  bottom: -7%;
  justify-self: center;
  @media ${themes.primary.media.maxMobile} {
    right: 0;
  }
`;

export const ServiceLink = styled.a``;
