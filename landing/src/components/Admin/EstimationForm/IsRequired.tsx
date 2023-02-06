import { Box } from "../../../styles/AdminPage";
import React from "react";
import {
  TieUpInput,
  TieUpLabel,
} from "../../../styles/Calculator/CalculatorAdmin.styled";

export interface IIsRequiredProps {
  currentQuestion: string;
  currentPage: string;
}

const IsRequired = ({ currentQuestion, currentPage }: IIsRequiredProps) => {
  return (
    <Box margin="0 6px 0 0" align="start">
      <TieUpInput
        type="checkbox"
        className={"admin-checkbox"}
        name={`isRequired`}
        id={`isRequiredId${currentQuestion}${currentPage}`}
      />
      <TieUpLabel
        dangerouslySetInnerHTML={{
          __html: "required",
        }}
        htmlFor={`isRequiredId${currentQuestion}${currentPage}`}
        style={{ marginLeft: "6px" }}
      />
    </Box>
  );
};

export default IsRequired;
