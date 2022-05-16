import React from "react";
import { BodyContainer } from "../../styles/Body.styled";
import AllYouNeed from "../AllYouNeed";
import EvenMore from "../EvenMore";
import Footer from "../Footer";
import HeaderNav from "../HeaderNav";
import TheyTrustUs from "../TheyTrustUs";
import WelcomeBlock from "../WelcomeBlock";

function Body() {
  return (
    <BodyContainer>
      <HeaderNav />
      <WelcomeBlock />
      <AllYouNeed />
      <EvenMore />
      <TheyTrustUs />
      <Footer />
    </BodyContainer>
  );
}

export default Body;
