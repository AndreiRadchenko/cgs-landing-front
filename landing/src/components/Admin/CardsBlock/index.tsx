import { FieldArray, useFormikContext } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import AdminCardsList from "./AdminCardsList";

const AdminCardsBlock = () => {
  const { values, handleChange } = useFormikContext<IDataResponse>();

  return (
    <Styled.AdminPaddedBlock theme={"dark"}>
      <br />
      <Styled.AdminCardsGrid>
        <div>
          <SubHeaderWithInput
            header="Text 4"
            name="CardsBlock.text4"
            inputValue={values.CardsBlock.text4}
            onChangeFunction={handleChange}
          />
        </div>
        <div>
          <SubHeaderWithInput
            header="Button"
            name="CardsBlock.button"
            inputValue={values.CardsBlock.button}
            onChangeFunction={handleChange}
          />
        </div>
      </Styled.AdminCardsGrid>
      <FieldArray name="CardsBlock.cards">
        {() => <AdminCardsList />}
      </FieldArray>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminCardsBlock;
