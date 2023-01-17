import React from "react";
import { IButtonProps } from "../../../types/Admin/AdminEstimationForm.types";
import * as Styled from "../../../styles/EstimationForm.styled";

const AddQuestionButton = ({ type, buttonText, handleClick }: IButtonProps) => {
  return (
    <Styled.AddQuestionButton type={type} onClick={handleClick}>
      {buttonText}
    </Styled.AddQuestionButton>
  );
};

export default AddQuestionButton;
