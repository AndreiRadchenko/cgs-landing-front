import React from "react";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";

import { ICalculatorStep } from "../../../types/Admin/Response.types";
import TextEditor from "../../TextEditor/TextEditor";

interface ICalculatorStepItemProps {
  step: ICalculatorStep;
  index: number;
}

const CalculatorStepItem = ({ step, index }: ICalculatorStepItemProps) => {
  const textEditorOptions = {
    font: ["NAMU"],
    linkRelDefault: {
      default: undefined,
      check_new_window: "nofollow",
    },
    buttonList: [["font", "fontSize", "fontColor"], ["removeFormat"]],
  };

  return (
    <AdminBlockDropDown title={`STEP ${index + 1}`}>
      <Styled.TransparentTextEditorWrapper>
        <TextEditor
          name={`[${index}].title`}
          props={{ height: "88px", setOptions: textEditorOptions }}
        />
      </Styled.TransparentTextEditorWrapper>
    </AdminBlockDropDown>
  );
};

export default CalculatorStepItem;
