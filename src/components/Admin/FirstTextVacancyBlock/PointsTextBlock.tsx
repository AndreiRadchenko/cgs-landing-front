import { FieldArray } from "formik";
import React from "react";
import { AdminInput } from "../../../styles/AdminPage";
import { IPointsData } from "../../../types/Admin/Response.types";

interface IPointsInputsProps {
  state: IPointsData[];
  onChangeFunction: (e?: React.ChangeEvent<any> | string) => void;
}

const renderInputs = ({ state, onChangeFunction }: IPointsInputsProps) => (
  <div>
    {state.map((el: IPointsData) => (
      <AdminInput
        key={`inputContact${el.point}`}
        name={`${el.point}.${el._id}`}
        value={el.point}
        onChange={onChangeFunction}
      />
    ))}
  </div>
);

const PointsTextBlock = ({ state, onChangeFunction }: IPointsInputsProps) => {
  return (
    <FieldArray name="ContactFormBlock">
      {() => renderInputs({ state, onChangeFunction })}
    </FieldArray>
  );
};

export default PointsTextBlock;
