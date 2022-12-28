import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import { ICalculator } from "../../../types/Admin/Response.types";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import SaveBtn from "../Global/SaveBtn";
import dynamic from "next/dynamic";
import { letterCaseSubmenu } from "./letterCaseSubmenuPlugin";
import { inputSubmenu } from "./inputSubmenuPlugin";
import { Plugin } from "suneditor/src/plugins/Plugin";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

const CalculatorResultsForm = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);

  const { mutateAsync } = useMutation(
    [queryKeys.updateCalculatorData],
    (data: ICalculator) => adminCalculatorService.updateCalculatorData(data)
  );
  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();

  const handleSubmit = async (values: ICalculator) => {
    document.body.style.cursor = "wait";
    await mutateAsync(values);
    queryClient.invalidateQueries([queryKeys.getCalculatorData]);
    document.body.style.cursor = "auto";
  };

  const editorOptions = plugins && {
    font: ["NAMU"],
    linkRelDefault: {
      default: undefined,
      check_new_window: "nofollow noopener",
    },
    addTagsWhitelist: "label|input",
    plugins: { letterCaseSubmenu, inputSubmenu, ...plugins },
    buttonList: [
      ["fontColor", "fontSize"],
      ["letterCase"],
      ["input"],
      ["removeFormat"],
      ["codeView"],
    ],
  };

  useEffect(() => {
    import("suneditor/src/plugins").then((plugs: any) => setPlugins(plugs));
  }, []);

  return data && plugins ? (
    <Formik initialValues={data!} onSubmit={handleSubmit}>
      {({ values, handleChange, handleSubmit }) => (
        <AdminBlockDropDown title="RESULTS">
          <Styled.InputWrapper>
            <Styled.TransparentTextEditorWrapper>
              <TextEditor
                header="Text after results"
                name="resultMessage"
                props={{
                  width: "559px",
                  setOptions: editorOptions,
                }}
              />
            </Styled.TransparentTextEditorWrapper>
            <Styled.TransparentTextEditorWrapper className="text">
              <SubHeaderWithInput
                header="E-mail placeholder"
                name="email"
                inputValue={values.email}
                onChangeFunction={handleChange}
                inputStyle={{ width: "559px" }}
              />
            </Styled.TransparentTextEditorWrapper>
            <SaveBtn
              handleClick={handleSubmit}
              style={{ marginTop: "37px", marginBottom: "50px" }}
            />
          </Styled.InputWrapper>
        </AdminBlockDropDown>
      )}
    </Formik>
  ) : null;
};

export default CalculatorResultsForm;
