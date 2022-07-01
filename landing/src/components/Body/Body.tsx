import React from "react";
import * as StyledThisComp from "../../styles/Body.styled";
import WelcomePage from "../WelcomePage/WelcomePage";
import HeaderNav from "../HeaderNav/HeaderNav";
import { IBodyProps } from "./types";

const Body = ({
  welcomePageButtonHandler,
  setIsClicked,
  heroImg,
}: IBodyProps) => {
  return (
    <StyledThisComp.BodyContainer>
      <HeaderNav />
      <WelcomePage
        clickHandler={welcomePageButtonHandler}
        setIsClicked={setIsClicked}
        heroImg={heroImg}
      />
    </StyledThisComp.BodyContainer>
  );
};

export default Body;
