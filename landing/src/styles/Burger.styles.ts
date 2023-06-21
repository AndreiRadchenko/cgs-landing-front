import styled from "styled-components";
import themes from "../utils/themes";

interface IButtonBurgerProps {
  isOpen?: boolean;
}

export const BurgerWrapper = styled.div`
  display: none;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    overflow-y: scroll;
    height: 100vh;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    transition: transform 0.3s ease-in;
    padding-top: 80px;
    background-color: ${themes.primary.colors.blogBackground};
    z-index: 35;

    &.open {
      transform: translateX(0);
    }
    &.hide {
      transform: translateX(100%);
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

export const BurgerContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BurgerButtonWrapper = styled.div`
  display: none;

  @media ${themes.primary.media.maxMobile} {
    display: flex;
    align-items: center;
    z-index: 36;
    padding-right: 1.25rem;
  }
`;

export const BurgerContainer = styled.nav`
  margin-top: 1.4375rem;
`;

export const BurgerButton = styled.button<IButtonBurgerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  height: 21px;
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

  div {
    width: 2.25rem;
    height: 0.1375rem;
    background: ${({ isOpen }) => (isOpen ? "#0D0C1D" : "#0C1033")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 100% 50%;
  }

  & div:nth-child(2) {
    width: 1.4375rem;
  }
`;

export const SocialLinksBurgerRow = styled.div`
  margin-top: 2.375rem;
`;

export const StyledLinksBurgerDecoration = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const StyledFooterLink = styled.a`
  display: block;
  margin-top: 1.3em;
  font-size: 1.4em;
  font-family: ${themes.primary.font.family.mulish};
  text-align: center;
`;

export const FooterWrapper = styled.div`
  width: fit-content;
`;

export const Mail = styled.a`
  display: block;
  line-height: 188%;
  padding-left: 1.25rem;
  width: 100%;
  font-size: 1rem;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};

  &.upper {
    margin-bottom: 14px;
  }
`;

export const FooterIconsWrapper = styled.div`
  margin-top: 1.4375rem;
  padding-left: 1.25rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  height: 32px;
`;

export const BurgerPrivacy = styled.a`
  margin-left: 20px;
  padding-bottom: 140px;
  color: ${themes.primary.colors.comment};
  font-size: 16px;
  font-family: ${themes.primary.font.family.namu};
  cursor: pointer;

  &:hover {
    color: ${themes.primary.colors.darkBlue};
  }
`;

export const WhatsAppLink = styled.div`
  padding-left: 1.25rem;
  margin-bottom: 40px;
`;

export const FooterLink = styled.a`
  padding-right: 3.65em;
`;

export const MailsWrapper = styled.div``;
