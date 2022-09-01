import React, { FC, ReactNode } from "react";
import * as StyledThisComp from "../../styles/Burger.styles";
import BurgerFooter from "./BurgerFooter";

interface IBurgerMenuProps {
  isOpen: boolean;
  children?: ReactNode[];
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ isOpen, children }) => {
  return (
    <StyledThisComp.BurgerWrapper className={isOpen ? "open" : "hide"}>
      <StyledThisComp.BurgerContainer>
        {children?.map((route, ind) => (
          <StyledThisComp.BurgerRow key={ind} className={isOpen ? "open" : ""}>
            {route}
          </StyledThisComp.BurgerRow>
        ))}
      </StyledThisComp.BurgerContainer>
      <StyledThisComp.SocialLinksBurgerRow>
        <BurgerFooter />
      </StyledThisComp.SocialLinksBurgerRow>
    </StyledThisComp.BurgerWrapper>
  );
};

export default BurgerMenu;
