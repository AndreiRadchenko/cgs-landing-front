import React from "react";
import { Box } from "../../../styles/AdminPage";
import {
  TieUpInput,
  TieUpLabel,
} from "../../../styles/Calculator/CalculatorAdmin.styled";

export interface ISplitColumnsProps {
  currentQuestion: string;
  currentPage: string;
}

const SplitColumns = ({ currentQuestion, currentPage }: ISplitColumnsProps) => {
  return (
    <Box margin="0 6px 0 0" align="start">
      <TieUpInput
        type="checkbox"
        className={"admin-checkbox"}
        name={`isSplitColumns`}
        id={`isSplitColumnsId${currentQuestion}${currentPage}`}
      />
      <TieUpLabel
        dangerouslySetInnerHTML={{
          __html: "split columns",
        }}
        htmlFor={`isSplitColumnsId${currentQuestion}${currentPage}`}
        style={{ marginLeft: "6px" }}
      />
    </Box>
  );
};

export default SplitColumns;
