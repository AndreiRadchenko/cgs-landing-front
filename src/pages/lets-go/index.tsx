import React from "react";

import * as StyledCommon from "../../styles/Page.styled";
import WhatWeLikeToSee from "../../components/WhatWeLikeToSee/WhatWeLikeToSee";
import Footer from "../../components/Footer/Footer";

const letsGo = () => {
  return (
    <>
      <StyledCommon.Page>
        <WhatWeLikeToSee />
      </StyledCommon.Page>
      <Footer />
    </>
  );
};

export default letsGo;
