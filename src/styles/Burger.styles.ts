import styled from "styled-components";
import themes from "../utils/themes";

export const BurgerWrapper = styled.div`
  display: none;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    overflow: hidden;
    min-height: 100%;
    width: 100%;
    position: fixed;
    right: 0;
    top: 0;
    transition: width 100ms ease-in;
    padding: 80px 0;

    &.open {
      width: 100%;
    }
    &.hide {
      transition-delay: 400ms;
      width: 0;
    }
    background-color: #fff;
    backdrop-filter: blur(5px);
    z-index: 35;
  }
`;

export const BurgerRow = styled.div`
  position: relative;
  font-size: ${themes.primary.font.size.quaternary};
  font-weight: ${themes.primary.font.weight.extraBold};
  margin-left: ${themes.primary.spacing.primary};
  max-width: fit-content;
  height: 70px;
  display: flex;
  flex-direction: column;
  transition: 300ms;

  &:hover {
    color: ${themes.primary.colors.linkBlue};
  }
  &:active {
    color: ${themes.primary.colors.linkBlue};
  }
`;

interface IButtonBurgerProps {
  isOpen?: boolean;
}

export const BurgerButtonWrapper = styled.div`
  display: none;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    position: absolute;
    right: 0;
    top: 7%;
    z-index: 36;
  }
`;

export const BurgerButton = styled.button<IButtonBurgerProps>`
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.2rem;
    background: ${({ isOpen }) => (isOpen ? "#0D0C1D" : "#0C1033")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(20px)" : "translateX(0)"};
      width: 80%;
      margin-left: auto;
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
      margin-left: auto;
    }
  }
`;

export const SocialLinksBurgerRow = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);
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
