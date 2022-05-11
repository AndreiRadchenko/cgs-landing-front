import { useFormikContext } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import AdminContactInputs from "./AdminContactsInputs";

const AdminContactFormBlock = () => {
  const { values, handleChange } = useFormikContext<IDataResponse>();

  return (
    <Styled.AdminPaddedBlock theme="dark">
      <Styled.AdminHalfGrid>
        <div>
          <Styled.AdminHeader>Contact Form</Styled.AdminHeader>
          <Styled.AdminSubTitle>Subtitle</Styled.AdminSubTitle>
          <AdminContactInputs
            state={values.ContactFormBlock}
            onChangeFunction={handleChange}
          />
        </div>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminContactFormBlock;
