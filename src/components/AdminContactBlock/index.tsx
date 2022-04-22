import { FieldArray } from "formik";
import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IContactFormBlock } from "../../types/Admin/Response.types";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import AdminContactInputs from "./AdminContactsInputs";

const AdminContactFormBlock = ({
  state,
  onChangeFunction,
}: {
  state: IContactFormBlock;
  onChangeFunction: any;
}) => {
  return (
    <Styled.AdminPaddedBlock theme="dark">
      <Styled.AdminHalfGrid>
        <div>
          <Styled.AdminHeader>Contact Form</Styled.AdminHeader>
          <SubHeaderWithInput
            header="Subtitle"
            name="ContactFormBlock.subtitle"
            inputValue={state.subtitle}
            onChangeFunction={onChangeFunction}
          />
          <FieldArray name="ContactFormBlock.inputs">
            {() => <AdminContactInputs state={state.inputs} onChangeFunction={onChangeFunction} />}
          </FieldArray>
        </div>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminContactFormBlock;
