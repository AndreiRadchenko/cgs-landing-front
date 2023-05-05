import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  display: none;
  @media ${themes.primary.media.maxMobile} {
    display: flex;
    padding-bottom: 5em;
    position: relative;
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
    > div {
      font-size: 4em;
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
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
    bottom: -10%;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const ServiceLink = styled.a``;
