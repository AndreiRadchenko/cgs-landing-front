import React, { FC, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import * as StyledHeaderNav from "../../components/HeaderNav/HeaderNav.styled";

export interface IBurgerButtonType {
  in: boolean;
  timeout: number;
  classNames: string;
  children?: ReactNode;
}

const BurgerSideBarButton: FC<IBurgerButtonType> = (props) => {
  return (
    <CSSTransition
      in={props.in}
      timeout={props.timeout}
      classNames={props.classNames}
      unmountOnExit
    >
      <StyledHeaderNav.BurgerLinkWrapper>
        {props.children}
      </StyledHeaderNav.BurgerLinkWrapper>
    </CSSTransition>
  );
};

export default BurgerSideBarButton;
