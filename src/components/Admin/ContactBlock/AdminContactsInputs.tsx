import { FieldArray } from "formik";
import React from "react";
import { AdminInput } from "../../../styles/AdminPage";
import { IRenderInputsProps } from "../../../types/Admin/Admin.types";
import { IContactFormBlock } from "../../../types/Admin/Response.types";

interface IContactInputsProps {
  state: IContactFormBlock;
  onChangeFunction: (e?: React.ChangeEvent<any>) => void;
}

const renderInputs = ({
  props,
  state,
  onChangeFunction,
}: IRenderInputsProps) => (
  <div>
    {Object.keys(state).map((i, ind) => {
      return (
        <AdminInput
          key={`inputContact${ind}`}
          name={`${props.name}.${i}`}
          value={state[i]}
          onChange={onChangeFunction}
        />
      );
    })}
  </div>
);

const AdminContactInputs = ({
  state,
  onChangeFunction,
}: IContactInputsProps) => {
  return (
    <FieldArray name="ContactFormBlock">
      {(props) => renderInputs({ props, state, onChangeFunction })}
    </FieldArray>
  );
};

export default AdminContactInputs;
