import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  display: none;
  @media ${themes.primary.media.maxMobile} {
    display: flex;
    margin-bottom: 5em;
    position: relative;
  }
`;

export const SwiperWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ServiceWrapper = styled.div`
  border: 1px solid ${themes.primary.colors.headerBorder};
  height: 40em;
  padding: 2.5em 2em;
  position: relative;
  overflow-y: visible;
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
  width: 85%;
  bottom: -7%;
  justify-self: center;
  @media ${themes.primary.media.maxMobile} {
    width: 55%;
    right: 0;
    bottom: -10%;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    width: 65%;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 75%;
  }
  @media (max-width: 400px) {
    width: 85%;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
