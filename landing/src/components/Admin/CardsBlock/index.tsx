import { FieldArray } from "formik";
import React from "react";
import AdminCardsList from "./AdminCardsList";

const AdminCardsBlock = () => {
  return (
    <div>
      <br />
      <FieldArray name="CardsBlock.cards">
        {() => <AdminCardsList />}
      </FieldArray>
    </div>
  );
};

export default AdminCardsBlock;
