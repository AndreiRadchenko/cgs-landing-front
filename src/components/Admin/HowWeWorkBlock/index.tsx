import { FieldArray } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IHowWeWorkBlock } from "../../../types/Admin/Response.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import AdminHowWorkList from "./AdminHowWorkList";

interface IHowWokrProps {
  state: IHowWeWorkBlock;
  onChangeFunction: (e?: React.ChangeEvent<any>) => void;
}

const render = ({ state, onChangeFunction }: IHowWokrProps) => (
  <AdminHowWorkList state={state.blocks} onChangeFunction={onChangeFunction} />
);

const AdminHowWeWorkBlock = ({ state, onChangeFunction }: IHowWokrProps) => {
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
          {() => render({ state, onChangeFunction })}
        </FieldArray>
      </div>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminHowWeWorkBlock;
