import { useFormikContext } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IPortfolioResponse } from "../../../types/Admin/AdminPortfolio";
import AdminDropDown from "../Global/AdminDropDown";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

const AdminPortfolioContentBlock = () => {
  const { values } = useFormikContext<IPortfolioResponse>();
  console.log(values);

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHeader>Portfolio</Styled.AdminHeader>
      <Styled.AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            header="Subtitle"
            inputValue="All work"
            onChangeFunction={() => {}}
          />
        </div>
      </Styled.AdminHalfGrid>
      <Styled.AdminSubTitle>Category</Styled.AdminSubTitle>

      <Styled.AdminCategoryBlock>
        {values.categories.map((i, ind) => (
          <Styled.AdminInput value={i} key={`category${ind}`} />
        ))}
        <AdminDropDown menu={values.categories} />
      </Styled.AdminCategoryBlock>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminPortfolioContentBlock;
