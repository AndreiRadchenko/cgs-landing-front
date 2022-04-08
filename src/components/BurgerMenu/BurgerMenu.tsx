import React, { FC, ReactNode } from "react";
import * as StyledThisComp from "../../styles/Burger.styles";
import Footer from "../Footer/Footer";

interface IBurgerMenuProps {
  isOpen: boolean;
  children: ReactNode[];
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ isOpen, children }) => {
  return (
    <StyledThisComp.BurgerWrapper className={isOpen ? "open" : "hide"}>
      {children.map((route, ind) => (
        <StyledThisComp.BurgerRow key={ind} className={isOpen ? "open" : ""}>
          {route}
        </StyledThisComp.BurgerRow>
      ))}

      <StyledThisComp.SocialLinksBurgerRow>
        <Footer />
      </StyledThisComp.SocialLinksBurgerRow>
    </StyledThisComp.BurgerWrapper>
  );
};

export default BurgerMenu;
