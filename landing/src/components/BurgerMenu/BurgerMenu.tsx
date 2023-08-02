import React, { FC } from "react";

import ButtonShareComponent from "../HomePage/ButtonShareComponent";
import BurgerFooter from "./BurgerFooter";

import * as StyledThisComp from "../../styles/Burger.styles";

import { IBurgerMenuProps } from "../../types/Button.types";

const BurgerMenu: FC<IBurgerMenuProps> = ({ isOpen, children, burgerRef }) => {
  return (
    <StyledThisComp.BurgerWrapper
      ref={burgerRef}
      className={isOpen ? "open" : "hide"}
    >
      <StyledThisComp.BurgerContent>
        <div>
          <StyledThisComp.BurgerContainer>
            {children?.map((route, ind) => (
              <StyledThisComp.BurgerRow
                key={ind}
                className={isOpen ? "open" : ""}
              >
                {route}
              </StyledThisComp.BurgerRow>
            ))}
          </StyledThisComp.BurgerContainer>
          <StyledThisComp.SocialLinksBurgerRow>
            <BurgerFooter />
          </StyledThisComp.SocialLinksBurgerRow>
          <StyledThisComp.WhatsAppLink>
            <ButtonShareComponent />
          </StyledThisComp.WhatsAppLink>
        </div>
        <StyledThisComp.BurgerPrivacy href="/privacy-policy">
          Privacy Policy
        </StyledThisComp.BurgerPrivacy>
      </StyledThisComp.BurgerContent>
    </StyledThisComp.BurgerWrapper>
  );
};

export default BurgerMenu;
