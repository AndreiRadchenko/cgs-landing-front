import React from "react";
import * as StyledThisComp from "../../styles/Body.styled";
import WelcomePage from "../WelcomePage/WelcomePage";
import HeaderNav from "../HeaderNav/HeaderNav";
import { IBodyProps } from "./types";

const Body = ({ welcomePageButtonHandler }: IBodyProps) => {
  return (
    <StyledThisComp.BodyContainer>
      <HeaderNav />
      <WelcomePage clickHandler={welcomePageButtonHandler} />
    </StyledThisComp.BodyContainer>
  );
};

export default Body;
