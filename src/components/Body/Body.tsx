import React from "react";
import * as StyledThisComp from "../../styles/Body.styled";
import WelcomePage from "../WelcomePage/WelcomePage";
import HeaderNav from "../HeaderNav/HeaderNav";

const Body = () => {
  return (
    <StyledThisComp.BodyContainer>
      <HeaderNav />
      <WelcomePage />
    </StyledThisComp.BodyContainer>
  );
};

export default Body;
