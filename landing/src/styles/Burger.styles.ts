import styled from "styled-components";
import themes from "../utils/themes";

interface IButtonBurgerProps {
  isOpen?: boolean;
}

export const BurgerWrapper = styled.div`
  display: none;

  @media ${themes.primary.media.maxMobile} {
    display: flex;
    flex-direction: column;
    gap: 90px;

    overflow-y: scroll;
    height: 100.1vh;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    transition: transform 0.3s ease-in;
    padding: 140px 0;
    background-color: ${themes.primary.colors.blogBackground};
    z-index: 35;

    &.open {
      transform: translateX(0);
    }
    &.hide {
      transform: translateX(100%);
    }
    @media ${themes.primary.media.maxMobilePortrait} {
      padding: 80px 0;
      gap: 45px;
    }
  }
`;

export const BurgerRow = styled.div`
  border-collapse: separate;
  border-top: 1px solid ${themes.primary.colors.separator};

  &:last-child {
    border-bottom: 1px solid ${themes.primary.colors.separator};
  }
`;

export const BurgerNavContainer = styled.nav`
  margin-top: 1.4375rem;
  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 1.4375rem;
  }
`;

export const BurgerButtonWrapper = styled.div`
  display: none;

  @media ${themes.primary.media.maxMobile} {
    display: flex;
    align-items: center;
    z-index: 36;
    padding-right: 40px;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    padding-right: 20px;
  }
`;

export const BurgerButton = styled.button<IButtonBurgerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: all 0.3s linear;
  transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(0deg)")};
  &:focus {
    outline: none;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    height: 14px;
  }

  div {
    width: 64px;
    height: 3px;
    background: ${({ isOpen }) => (isOpen ? "#0D0C1D" : "#0C1033")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 100% 50%;
    @media ${themes.primary.media.maxMobilePortrait} {
      width: 34px;
      height: 2.2px;
    }
  }

  & div:nth-child(2) {
    width: 41px;
    @media ${themes.primary.media.maxMobilePortrait} {
      width: 23px;
    }
  }
`;

export const SocialLinksBurgerRow = styled.div``;

export const FooterWrapper = styled.div`
  width: 100%;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  & > div:nth-child(3) {
    gap: 14px !important;
    margin: 0;
    & > a {
      & > div {
        margin: 0;
        font-size: 20px;
        & > div {
          width: 16px;
          height: 16px;
        }
      }
    }

    @media ${themes.primary.media.maxLowScreenMobile} {
      & > a {
        & > div {
          margin: 0;
          font-size: 16px;
          & > div {
            width: 14px;
            height: 14px;
          }
        }
      }
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    gap: 24px;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    padding: 0 20px;
  }
`;

export const MailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media ${themes.primary.media.maxLowScreenMobile} {
    gap: 16px;
  }
`;

export const Mail = styled.a`
  display: block;
  line-height: 188%;
  width: 100%;
  font-size: 20px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 16px;
  }
`;

export const FooterIconsWrapper = styled.div`
  display: flex;
  gap: 43px;

  & > a:nth-child(1) {
    width: 48px;
  }
  & > a:nth-child(2) {
    width: 43px;
  }
  & > a:nth-child(3) {
    width: 34px;
  }
  & > a:nth-child(4) {
    width: 40px;
  }
  & > a:nth-child(5) {
    width: 56.4px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    gap: 24px;
    & > a {
      width: 45px !important;
    }
    & > a:nth-child(1) {
      width: 40px !important;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 40px;
  object-fit: contain;

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 32px;
  }
`;

export const FooterLink = styled.a``;

export const WhatsAppLink = styled.div``;

export const PrivacyPolicyContainer = styled.div``;

export const BurgerPrivacy = styled.a`
  color: ${themes.primary.colors.comment};
  font-size: 20px;
  font-family: ${themes.primary.font.family.namu};
  cursor: pointer;

  &:hover {
    color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 16px;
  }
`;
