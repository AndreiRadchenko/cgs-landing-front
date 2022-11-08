import React from "react";
import * as Styled from "../../../styles/AdminPage";

import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import CalculatorPagerForm from "./CalculatorPager";
import CalculatorStepsForm from "./CalculatorStepsForm";

const AdminCalculatorContent = () => {
  return (
    <Styled.AdminContentBlock>
      <Styled.AdminBlocksContent>
        <Styled.AdminHeader>CALCULATOR</Styled.AdminHeader>
        <AdminBlockDropDown title="PAGER">
          <CalculatorPagerForm />
        </AdminBlockDropDown>
        <CalculatorStepsForm />
      </Styled.AdminBlocksContent>
    </Styled.AdminContentBlock>
  );
};

export default AdminCalculatorContent;
