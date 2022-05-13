import React from "react";
import { BodyContainer } from "../../styles/Body.styled";
import HeaderNav from "../HeaderNav";
import WelcomeBlock from "../WelcomeBlock";

function Body() {
  return (
    <BodyContainer>
      <HeaderNav />
      <WelcomeBlock />
    </BodyContainer>
  );
}

export default Body;
