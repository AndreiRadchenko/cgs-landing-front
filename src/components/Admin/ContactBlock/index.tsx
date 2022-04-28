import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IContactFormBlock } from "../../../types/Admin/Response.types";
import AdminContactInputs from "./AdminContactsInputs";

interface IContactFormProps {
  state: IContactFormBlock;
  onChangeFunction: (e?: React.ChangeEvent<any>) => void;
}

const AdminContactFormBlock = ({
  state,
  onChangeFunction,
}: IContactFormProps) => {
  return (
    <Styled.AdminPaddedBlock theme="dark">
      <Styled.AdminHalfGrid>
        <div>
          <Styled.AdminHeader>Contact Form</Styled.AdminHeader>
          <Styled.AdminSubTitle>Subtitle</Styled.AdminSubTitle>
          <AdminContactInputs
            state={state}
            onChangeFunction={onChangeFunction}
          />
        </div>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminContactFormBlock;
