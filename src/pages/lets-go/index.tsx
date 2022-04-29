import React from "react";
import * as StyledCommon from "../../styles/Page.styled";
import WhatWeLikeToSee from "../../components/WhatWeLikeToSee/WhatWeLikeToSee";
import Footer from "../../components/Footer/Footer";
import { NextPage } from "next";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import LetsGoForm from "../../components/LetsGoForm";

const LetsGo: NextPage = () => {
  return (
    <>
      <StyledCommon.Page>
        <HeaderNav />
        <WhatWeLikeToSee />
        <LetsGoForm />
      </StyledCommon.Page>
      <Footer />
    </>
  );
};

export default LetsGo;
