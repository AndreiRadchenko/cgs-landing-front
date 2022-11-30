import React, { useEffect, useState } from "react";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";

import { ICalculatorStep } from "../../../types/Admin/Response.types";
import dynamic from "next/dynamic";
import { letterCaseSubmenu } from "./letterCaseSubmenuPlugin";
import { plugin_command } from "./customPlugin";
const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

interface ICalculatorStepItemProps {
  step: ICalculatorStep;
  index: number;
}

const CalculatorStepItem = ({ step, index }: ICalculatorStepItemProps) => {
  const [plugins, setPlugins] = useState();
  useEffect(() => {
    import("suneditor/src/plugins").then((plugs) => setPlugins(plugs));
  }, []);

  const textEditorOptions = plugins && {
    font: ["NAMU"],
    linkRelDefault: {
      default: undefined,
      check_new_window: "nofollow noopener",
    },
    plugins: { letterCaseSubmenu, plugin_command, ...plugins },
    buttonList: [
      ["letterCase", "image", "customCommand", "codeView"],
      ["fontColor", "fontSize"],
      ["removeFormat"],
    ],
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
