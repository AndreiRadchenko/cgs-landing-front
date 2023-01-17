import React from "react";
import * as Styled from "../../../styles/EstimationForm.styled";

interface IAddOptionsProps {
  type: string;
}

const AddOptionInput = ({ type }: IAddOptionsProps) => {
  type = type.toLowerCase().split("_")[0];
  return (
    <Styled.AddOptionInputWrapper>
      <input name="option" type={type.toLowerCase()} placeholder="Add option" />
      {(type === "checkbox" || type === "radio") && <label>Add option</label>}
    </Styled.AddOptionInputWrapper>
  );
};

export default AddOptionInput;
