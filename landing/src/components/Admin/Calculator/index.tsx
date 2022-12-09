import React from "react";
import * as Styled from "../../../styles/AdminPage";

import CalculatorPagerForm from "./CalculatorPager";
import CalculatorResultsForm from "./CalculatorResultsForm";
import CalculatorStepsForm from "./CalculatorStepsForm";

const AdminCalculatorContent = () => {
  return (
    <Styled.AdminContentBlock>
      <Styled.AdminBlocksContent>
        <Styled.AdminHeader>CALCULATOR</Styled.AdminHeader>
        <CalculatorPagerForm />
        <CalculatorStepsForm />
        <CalculatorResultsForm />
      </Styled.AdminBlocksContent>
    </Styled.AdminContentBlock>
  );
};

export default AdminCalculatorContent;
