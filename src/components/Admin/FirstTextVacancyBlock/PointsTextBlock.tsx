import { FieldArray } from "formik";
import React from "react";
import { AdminInput } from "../../../styles/AdminPage";
import { IPointsData } from "../../../types/Admin/Response.types";

interface IPointsInputsProps {
  state: IPointsData[];
  name: string;
  onChangeFunction: (e?: React.ChangeEvent<any> | string) => void;
}

const renderInputs = ({
  state,
  name,
  onChangeFunction,
}: IPointsInputsProps) => (
  <div>
    {state.map((el: IPointsData, ind: number) => (
      <AdminInput
        minRows={2}
        key={el._id}
        name={`${name}.points[${ind}].point`}
        value={el.point}
        onChange={onChangeFunction}
      />
    ))}
  </div>
);

const PointsTextBlock = ({
  state,
  onChangeFunction,
  name,
}: IPointsInputsProps) => {
  return (
    <FieldArray name="ContactFormBlock">
      {() => renderInputs({ state, onChangeFunction, name })}
    </FieldArray>
  );
};

export default PointsTextBlock;
