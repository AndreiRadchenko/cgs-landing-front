import { useFormikContext } from "formik";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Plugin } from "suneditor/src/plugins/Plugin";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import { ICalculatorStep } from "../../../types/Admin/Response.types";
import CalculatorTypeSelect from "./CalculatorTypeSelect";
import { letterCaseSubmenu } from "./letterCaseSubmenuPlugin";
import { letterWeightSubmenu } from "./letterWeightSubmenuPlugin";
const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

interface ICalculatorQuestionItemProps {
  idx: number;
  stepInd: number;
  setClassicSteps: React.Dispatch<React.SetStateAction<ICalculatorStep[]>>;
}

const CalculatorQuestionItem = ({
  idx,
  stepInd,
  setClassicSteps,
}: ICalculatorQuestionItemProps) => {
  const { values, setFieldValue, handleChange } =
    useFormikContext<ICalculatorStep>();
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

  const handleAddQuestionClick = () => {
    setClassicSteps((old) => {
      const temp = old;
      temp[stepInd].options.splice(idx + 1, 0, {
        _id: "",
        label: "",
        hours: 0,
        role: "",
        endRoleCoef: 0,
        endCoef: 0,
      });

      return temp;
    });
    // values.options.splice(idx + 1, 0, {
    //   _id: "",
    //   label: "",
    //   hours: 0,
    //   role: "",
    //   endRoleCoef: 0,
    //   endCoef: 0,
    // });

    // console.log(values.options);

    // setFieldValue(`options[${idx +}]`);
  };

  const handleDeleteClick = () => {
    // const filtered = values;
    // console.log(idx);
    // filtered.options.splice(idx, 1);
    // console.log(values);
    // setClassicSteps((old) => {
    //   const temp = old;
    //   temp[stepInd] = filtered;
    //   return temp;
    // });
    // setFieldValue("options", filtered);
  };

  return (
    (plugins && (
      <Styled.CalculatorQuestionWrapper>
        <Styled.TextEditorTextContainer className={values.type}>
          <TextEditor
            name={`options[${idx}].label`}
            props={{
              height: "37px",
              width: "559px",
              setDefaultStyle: `position:relative; z-index:${idx + 3}`,
              setOptions: textEditorOptions,
            }}
          />
        </Styled.TextEditorTextContainer>
        <Styled.OptionInputsWrapper>
          <Styled.OptionDeleteButton onClick={handleDeleteClick}>
            delete
          </Styled.OptionDeleteButton>
          <Styled.OptionInputsRowWrapper>
            <Styled.OptionInput
              className="hours"
              name={`options[${idx}].hours`}
              placeholder="hours"
              onChange={handleChange}
              type="number"
              min={0}
            />
            <CalculatorTypeSelect idx={idx} />
            <Styled.OptionInput
              className="coef"
              name={`options[${idx}].endRoleCoef`}
              placeholder="coeffiecient roles"
              onChange={handleChange}
              type="number"
              min={0}
            />
            <Styled.OptionInput
              className="coef"
              name={`options[${idx}].endRole`}
              placeholder="coefficient final"
              onChange={handleChange}
              type="number"
              min={0}
            />
            <Styled.CalculatorAddButton onClick={handleAddQuestionClick}>
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
