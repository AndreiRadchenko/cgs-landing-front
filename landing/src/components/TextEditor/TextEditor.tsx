import React from "react";
import { Field } from "formik";
import * as Styled from "../../styles/AdminPage";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

interface ITextEditorProps {
  header: string;
  name: string;
  props?: SunEditorReactProps;
}

const TextEditor = ({ name, header, props }: ITextEditorProps) => {
  const options = {
    font: ["NAMU", "Open Sans"],
    linkRelDefault: {
      default: undefined,
      check_new_window: "nofollow noopener",
    },
    buttonList: [
      ["undo", "redo"],
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
          {({ field }: any) => (
            <SunEditor
              defaultValue={field.value}
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
