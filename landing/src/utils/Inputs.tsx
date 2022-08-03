import { FieldArray } from "formik";
import React, { ChangeEvent } from "react";
import { renderInputs } from "./renderInputs";

interface IInputs {
  name: string;
  state: any;
  onChangeFunction: (e: ChangeEvent<any>) => void;
}

const Inputs = ({ name, state, onChangeFunction }: IInputs) => {
  return (
    <FieldArray name={name}>
      {(props) => renderInputs({ props, state, onChangeFunction })}
    </FieldArray>
  );
};

export default Inputs;
