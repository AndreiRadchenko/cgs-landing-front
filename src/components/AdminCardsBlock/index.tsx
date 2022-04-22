import { FieldArray } from "formik";
import React from "react";
import * as Styled from "../../styles/AdminPage";
import { ICards } from "../../types/Admin/Response.types";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import AdminCardsList from "./AdminCardsList";

const AdminCardsBlock = ({
  state,
  onChangeFunction,
}: {
  state: ICards;
  onChangeFunction: any;
}) => {
  return (
    <Styled.AdminPaddedBlock theme={"dark"}>
      <br />
      <Styled.AdminCardsGrid>
        <div>
          <SubHeaderWithInput
            header="Text 4"
            name="CardsBlock.text4"
            inputValue={state.text4}
            onChangeFunction={onChangeFunction}
          />
        </div>
        <div>
          <SubHeaderWithInput
            header="Button"
            name="CardsBlock.button"
            inputValue={state.button}
            onChangeFunction={onChangeFunction}
          />
        </div>
      </Styled.AdminCardsGrid>
      <FieldArray name="CardsBlock.cards">
        {() => (
          <AdminCardsList
            state={state.cards}
            onChangeFunction={onChangeFunction}
          />
        )}
      </FieldArray>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminCardsBlock;
