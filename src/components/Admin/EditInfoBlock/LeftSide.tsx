import { FieldArray } from "formik";
import React from "react";
import { IEditInformation } from "../../../types/Admin/Response.types";
import { renderInputs } from "../../../utils/renderInputs";

interface ILeftSideProps {
  state: IEditInformation;
  onChangeFunction: any;
}

const LeftSideBlock = ({ state, onChangeFunction }: ILeftSideProps) => {
  return (
    <FieldArray name="EditInformationBlock">
      {(props) => renderInputs({ props, state, onChangeFunction })}
    </FieldArray>
  );
};

export default LeftSideBlock;
