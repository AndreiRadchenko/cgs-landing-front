import { FieldArray } from "formik";
import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IHowWeWorkBlock } from "../../types/Admin/Response.types";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import AdminHowWorkList from "./AdminHowWorkList";

const AdminHowWeWorkBlock = ({
  state,
  onChangeFunction,
}: {
  state: IHowWeWorkBlock;
  onChangeFunction: any;
}) => {
  return (
    <Styled.AdminPaddedBlock theme="dark">
      <Styled.AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            header="Subtitle"
            name="HowWeWorkBlock.pageSignature"
            inputValue={state.pageSignature}
            onChangeFunction={onChangeFunction}
          />
        </div>
      </Styled.AdminHalfGrid>
      <div>
        <FieldArray name="HowWeWorkBlock.blocks">
          {() => (
            <AdminHowWorkList
              state={state.blocks}
              onChangeFunction={onChangeFunction}
            />
          )}
        </FieldArray>
      </div>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminHowWeWorkBlock;
