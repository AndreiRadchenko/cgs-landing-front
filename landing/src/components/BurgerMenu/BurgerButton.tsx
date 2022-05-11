import React, { FC } from "react";
import * as StyledThisComp from "../../styles/Burger.styles";

interface IBurgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const BurgerButton: FC<IBurgerButtonProps> = ({ isOpen, onToggle }) => {
  return (
    <StyledThisComp.BurgerButtonWrapper>
      <StyledThisComp.BurgerButton isOpen={isOpen} onClick={onToggle}>
        <div />
        <div />
        <div />
      </StyledThisComp.BurgerButton>
    </StyledThisComp.BurgerButtonWrapper>
  );
};

export default BurgerButton;
