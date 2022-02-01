import React, { FC, ReactNode } from "react";
import * as StyledThisComp from "../../styles/Burger.styles";

interface IBurgerMenuProps {
  isOpen: boolean;
  children: ReactNode;
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ isOpen, children }) => {
  return (
    <StyledThisComp.BurgerWrapper className={isOpen ? "open" : "hide"}>
      <StyledThisComp.BurgerRow className={isOpen ? "open" : ""}>
        {children}
      </StyledThisComp.BurgerRow>
    </StyledThisComp.BurgerWrapper>
  );
};

export default BurgerMenu;
