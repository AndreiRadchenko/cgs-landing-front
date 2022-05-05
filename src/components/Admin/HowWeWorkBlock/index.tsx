import { FieldArray, useFormikContext } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import AdminHowWorkList from "./AdminHowWorkList";

const AdminHowWeWorkBlock = () => {
  const {values, handleChange} = useFormikContext<IDataResponse>();

  return (
    <Styled.AdminPaddedBlock theme="dark">
      <Styled.AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            header="Subtitle"
            name="HowWeWorkBlock.pageSignature"
            inputValue={values.HowWeWorkBlock.pageSignature}
            onChangeFunction={handleChange}
          />
        </div>
      </Styled.AdminHalfGrid>
      <div>
        <FieldArray name="HowWeWorkBlock.blocks">
          {() => <AdminHowWorkList />}
        </FieldArray>
      </div>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminHowWeWorkBlock;
