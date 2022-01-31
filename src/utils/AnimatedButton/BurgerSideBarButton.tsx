import React, { FC, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import * as StyledHeaderNav from "../../components/HeaderNav/HeaderNav.styled";

export interface IBurgerButtonType {
  isOpen: boolean;
  timeout: number;
  classNames: string;
  children?: ReactNode;
}

const BurgerSideBarButton: FC<IBurgerButtonType> = ({
  timeout,
  classNames,
  children,
  isOpen,
}) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={timeout}
      classNames={classNames}
      unmountOnExit
    >
      <StyledHeaderNav.BurgerLinkWrapper>
        {children}
      </StyledHeaderNav.BurgerLinkWrapper>
    </CSSTransition>
  );
};

export default BurgerSideBarButton;
