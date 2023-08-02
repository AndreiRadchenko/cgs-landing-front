import React from "react";
import dynamic from "next/dynamic";
import { Field, FieldProps } from "formik";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";
import SetOptions from "suneditor-react/dist/types/SetOptions";

import * as Styled from "../../styles/AdminPage";
import "suneditor/dist/css/suneditor.min.css";

interface ITextEditorProps {
  header?: string;
  name?: string;
  props?: SunEditorReactProps;
}

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const TextEditor = ({ name = "", header, props }: ITextEditorProps) => {
  const options: SetOptions = {
    font: ["NAMU"],
    linkRelDefault: {
      default: undefined,
      check_new_window: "nofollow noopener",
    },
    buttonList: [
      [
        "formatBlock",
        "font",
        "fontSize",
        "fontColor",
        "align",
        "paragraphStyle",
        "blockquote",
      ],
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["list"],
      ["link", "image", "video"],
      ["codeView"],
    ],
  };

  return (
    <div>
      <Styled.AdminSubTitle>{header}</Styled.AdminSubTitle>
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
