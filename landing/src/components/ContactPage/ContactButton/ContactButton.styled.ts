import styled from "styled-components";
import themes from "../../../utils/themes";

export interface IImageWrapperProps {
  width: string;
  height: string;
}

export const ButtonWrapper = styled.a`
  padding: 0;
  margin: 0;
  width: 58px;
  height: 58px;
  background-color: ${themes.primary.colors.blogBackground};
  border: 2px solid ${themes.primary.colors.black};
  box-shadow: 7px 2px 0px #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(0);
  transition: transform 0.3s ease, color 0.3s ease;
  color: ${themes.primary.colors.black};

  &.messenger-button > div {
    align-items: center;
  }

  :hover {
    transform: translateY(-5px);
  }

  &.email-button {
    width: 22.35vw;
    height: 77px;

    .img-wrapper {
      width: 27.5px;
      height: 18.5px;

      @media ${themes.primary.media.maxPCFullHD} {
        width: 20.5px;
        height: 14px;
      }
    }
  }

  &.social-button,
  &.about-button {
    width: 77px;
    height: 77px;

    @media ${themes.primary.media.maxPCFullHD} {
      width: 58px;
      height: 58px;
    }
  }

  &.messenger-button {
    width: 22.35vw;
    height: 77px;

    .img-wrapper {
      width: 32.1px;
      height: 31.8px;

      @media ${themes.primary.media.maxPCFullHD} {
        width: 24.1px;
        height: 24px;
      }
    }
  }

  &.social-button {
    .img-wrapper {
      width: 47.2px;
      height: 47.1px;

      @media ${themes.primary.media.maxPCFullHD} {
        width: 32px;
        height: 32px;
      }
    }
  }

  &.about-button {
    .img-wrapper {
      width: 45px;
      height: 45px;

      @media ${themes.primary.media.maxPCFullHD} {
        width: 32px;
        height: 32px;
      }
    }
  }

  @media ${themes.primary.media.maxPCFullHD} {
    &.email-button,
    &.messenger-button {
      width: 322px;
      height: 58px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    &.email-button,
    &.messenger-button {
      width: 84.77vw;
      height: 58px;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    &.messenger-button,
    &.email-button {
      width: 85.87vw;
      height: 58px;
    }
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: currentColor;
  @media (max-width: 1799px) {
    align-items: baseline;
  }
  @media (max-width: 991px) {
    align-items: flex-end;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const ButtonText = styled.p`
  color: currentColor;
  margin: 0;
  padding: 0;
  font-weight: 900;
  line-height: 1;
  will-change: transform;
  font-size: 1.5em;

  @media ${themes.primary.media.maxLaptop} {
    font-size: 1.66em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 22px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 18px;
  }
`;
