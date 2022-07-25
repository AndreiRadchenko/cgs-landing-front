import { FieldArray } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import AdminCardsList from "./AdminCardsList";

const AdminCardsBlock = () => {
  return (
    <Styled.AdminPaddedBlock>
      <br />
      <FieldArray name="CardsBlock.cards">
        {() => <AdminCardsList />}
      </FieldArray>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminCardsBlock;
