import React, { FC, ReactNode } from "react";
import * as StyledThisComp from "../../styles/Burger.styles";
import WhatsAppComponent from "../HomePage/WhatsAppComponent";
import BurgerFooter from "./BurgerFooter";

interface IBurgerMenuProps {
  isOpen: boolean;
  children?: ReactNode[];
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ isOpen, children }) => {
  return (
    <StyledThisComp.BurgerWrapper className={isOpen ? "open" : "hide"}>
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
            <WhatsAppComponent />
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
