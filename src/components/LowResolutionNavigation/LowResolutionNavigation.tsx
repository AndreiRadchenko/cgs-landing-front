import React, { FC } from "react";
import BurgerButton from "../BurgerMenu/BurgerButton";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { navigationRoutesNames } from "../../utils/variables";
import BurgerSideBarButton from "../../utils/AnimatedButton/BurgerSideBarButton";
import * as StyledFooter from "../Footer/Footer.styled";
import * as StyledBurger from "../../styles/Burger.styles";
import { socialLinks } from "../Footer/Footer";
import FooterIcon from "../Footer/FooterIcon";
import {
  SocialLinksBurgerRow,
  StyledFooterLink,
  StyledLinksBurgerDecoration,
} from "../../styles/Burger.styles";
import * as Styles from "../Footer/Footer.styled";

interface ILowResolutionNavigation {
  isOpen: boolean;
  onToggle: () => void;
}

const LowResolutionNavigation: FC<ILowResolutionNavigation> = ({
  isOpen,
  onToggle,
}) => {
  return (
    <>
      <BurgerButton isOpen={isOpen} onToggle={onToggle} />
      <BurgerMenu isOpen={isOpen}>
        {navigationRoutesNames.map((item, idx) => (
          <BurgerSideBarButton
            key={item}
            in={isOpen}
            timeout={200 * idx + 1}
            classNames={"transition-button"}
          >
            {item}
          </BurgerSideBarButton>
        ))}

        <StyledBurger.SocialLinksBurgerRow>
          <StyledBurger.StyledLinksBurgerDecoration>
            {socialLinks.map((link) => (
              <FooterIcon key={link.href + link.icoUrl} {...link} />
            ))}
            <StyledFooter.DecorationFooterLinks />
          </StyledBurger.StyledLinksBurgerDecoration>

          <StyledBurger.StyledFooterLink
            href={"mailto:contact@codegenerationsoftware.com"}
          >
            contact@codegenerationsoftware.com
          </StyledBurger.StyledFooterLink>
        </StyledBurger.SocialLinksBurgerRow>
      </BurgerMenu>
    </>
  );
};

export default LowResolutionNavigation;
