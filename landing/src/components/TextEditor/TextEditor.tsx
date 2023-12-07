import React, { CSSProperties } from "react";
import dynamic from "next/dynamic";
import { Field, FieldProps } from "formik";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";

import * as Styled from "../../styles/AdminPage";
import "suneditor/dist/css/suneditor.min.css";

import { options } from "../../consts";

interface ITextEditorProps {
  header?: string;
  name?: string;
  props?: SunEditorReactProps;
  subtitleStyle?: CSSProperties;
}

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const TextEditor = ({
  name = "",
  header,
  props,
  subtitleStyle,
}: ITextEditorProps) => {
  return (
    <div>
      <Styled.AdminSubTitle style={subtitleStyle}>
        {header}
      </Styled.AdminSubTitle>
      <Styled.TextEditorContainer>
        <Field name={name}>
          {({ field }: FieldProps) => (
            <SunEditor
              name={field.name}
              defaultValue={field.value}
              setContents={field.value}
              onChange={field.onChange(field.name)}
              lang="en"
              setOptions={options}
              {...props}
            />
          )}
        </Field>
      </Styled.TextEditorContainer>
    </div>
  );
};

export default TextEditor;
