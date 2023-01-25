import { useFormikContext } from "formik";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Plugin } from "suneditor/src/plugins/Plugin";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import {
  ICalculatorStep,
  IStepOptions,
} from "../../../types/Admin/Response.types";
import CalculatorTypeSelect from "./CalculatorTypeSelect";
import { letterCaseSubmenu } from "./letterCaseSubmenuPlugin";
import { letterWeightSubmenu } from "./letterWeightSubmenuPlugin";
const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

interface ICalculatorQuestionItemProps {
  idx: number;
  onAdd: () => void;
  onDelete: () => void;
  nameBefore?: string;
  option: IStepOptions;
  type: string;
}

const CalculatorQuestionItem = ({
  idx,
  option,
  onAdd,
  onDelete,
  nameBefore,
  type,
}: ICalculatorQuestionItemProps) => {
  const { handleChange } = useFormikContext<ICalculatorStep>();
  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();

  useEffect(() => {
    import("suneditor/src/plugins").then((plugs: any) => setPlugins(plugs));
  }, []);

  const textEditorOptions = plugins && {
    font: ["NAMU"],
    linkRelDefault: {
      default: undefined,
      check_new_window: "nofollow noopener",
    },
    addTagsWhitelist: "label|input",
    plugins: { letterCaseSubmenu, letterWeightSubmenu, ...plugins },
    buttonList: [
      ["fontColor", "fontSize"],
      ["letterCase"],
      ["letterWeight"],
      ["removeFormat"],
      ["codeView"],
    ],
  };

  const questionNameBefore = nameBefore || "";

  return (
    (plugins && (
      <Styled.CalculatorQuestionWrapper>
        <Styled.TextEditorTextContainer className={type}>
          <TextEditor
            name={`${questionNameBefore}options[${idx}].label`}
            props={{
              height: "37px",
              width: "559px",
              setDefaultStyle: `position:relative; z-index:${idx + 3}`,
              setContents: option.label,
              setOptions: textEditorOptions,
            }}
          />
        </Styled.TextEditorTextContainer>
        <Styled.OptionInputsWrapper>
          <Styled.OptionDeleteButton onClick={onDelete}>
            delete
          </Styled.OptionDeleteButton>
          <Styled.OptionInputsRowWrapper>
            <Styled.OptionInput
              className="hours"
              name={`${questionNameBefore}options[${idx}].hours`}
              placeholder="hours"
              values={option.hours}
              onChange={handleChange}
              type="number"
              min={0}
            />
            <CalculatorTypeSelect idx={idx} nameBefore={nameBefore} />
            <Styled.OptionInput
              className="coef"
              name={`${questionNameBefore}options[${idx}].endRoleCoef`}
              placeholder="coeffiecient roles"
              onChange={handleChange}
              type="number"
              values={option.endRoleCoef}
              min={0}
            />
            <Styled.OptionInput
              className="coef"
              name={`${questionNameBefore}options[${idx}].endRole`}
              placeholder="coefficient final"
              onChange={handleChange}
              type="number"
              values={option.endCoef}
              min={0}
            />
            <Styled.CalculatorAddButton onClick={onAdd}>
              + add next
            </Styled.CalculatorAddButton>
          </Styled.OptionInputsRowWrapper>
        </Styled.OptionInputsWrapper>
      </Styled.CalculatorQuestionWrapper>
    )) ||
    null
  );
};

export default CalculatorQuestionItem;
