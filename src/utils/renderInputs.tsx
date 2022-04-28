import { IRenderInputsProps } from "../types/Admin/Admin.types";
import React from "react";
import SubHeaderWithInput from "../components/Admin/Global/SubHeaderWithInput";
import { firstLetterToUpperCase } from "./firstLetterToUpperCase";

export const renderInputs = ({
  props,
  state,
  onChangeFunction,
}: IRenderInputsProps) => {
  return (
    <div>
      {Object.keys(state).map((i, ind) => {
        if (i !== "image") {
          return (
            <SubHeaderWithInput
              key={`input${ind}${props.name}`}
              header={firstLetterToUpperCase(i)}
              name={`${props.name}.${i}`}
              inputValue={state[i]}
              onChangeFunction={onChangeFunction}
            />
          );
        }
      })}
    </div>
  );
};
