import React from "react";

import * as StyledCommon from "../../styles/Page.styled";
import WhatWeLikeToSee from "../../components/WhatWeLikeToSee/WhatWeLikeToSee";
import Footer from "../../components/Footer/Footer";
import { NextPage } from "next";

const LetsGo: NextPage = () => {
  return (
    <>
      <StyledCommon.Page>
        <WhatWeLikeToSee />
      </StyledCommon.Page>
      <Footer />
    </>
  );
};

export default LetsGo;
