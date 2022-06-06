import React from "react";
import * as StyledThisComp from "../../styles/Body.styled";
import WelcomePage from "../WelcomePage/WelcomePage";
import HeaderNav from "../HeaderNav/HeaderNav";
import { IBodyProps } from "./types";

const Body = ({ welcomePageButtonHandler, setIsClicked }: IBodyProps) => {
  return (
    <StyledThisComp.BodyContainer>
      <HeaderNav />
      <WelcomePage
        clickHandler={welcomePageButtonHandler}
        setIsClicked={setIsClicked}
      />
    </StyledThisComp.BodyContainer>
  );
};

export default Body;
