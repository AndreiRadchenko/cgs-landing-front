import React from "react";
import * as Styled from "../../../styles/AdminPage";

import CalculatorPagerForm from "./CalculatorPager";
import CalculatorStepsForm from "./CalculatorStepsForm";

const AdminCalculatorContent = () => {
  return (
    <Styled.AdminContentBlock>
      <Styled.AdminBlocksContent>
        <Styled.AdminHeader>CALCULATOR</Styled.AdminHeader>
        <CalculatorPagerForm />

        <CalculatorStepsForm />
      </Styled.AdminBlocksContent>
    </Styled.AdminContentBlock>
  );
};

export default AdminCalculatorContent;
