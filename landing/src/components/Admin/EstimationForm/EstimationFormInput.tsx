import { Field, FieldProps } from "formik";
import React from "react";
import SunEditor from "suneditor-react";
import SetOptions from "suneditor-react/dist/types/SetOptions";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";
import * as Styled from "../../../styles/EstimationForm.styled";
import "suneditor/dist/css/suneditor.min.css";
interface ITextEditorPropsOptions {
  text: string;
}

interface ITextEditorProps {
  optionValue?: string;
  questionOptions?: ITextEditorPropsOptions[];
  header?: string;
  name?: string | null;
  props?: SunEditorReactProps;
}

const EstimationFormInput = ({
  name = "",
  header,
  props,
}: ITextEditorProps) => {
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
    <>
      <Styled.EstimationFormInputHeader>
        {header}
      </Styled.EstimationFormInputHeader>
      <Field name={name}>
        {({ field }: FieldProps) => {
          return (
            <SunEditor
              autoFocus={false}
              name={field.name}
              defaultValue={!!field.value ? field.value : ""}
              onChange={field.onChange(field.name)}
              lang="en"
              setOptions={options}
              {...props}
            />
          );
        }}
      </Field>
    </>
  );
};

export default EstimationFormInput;
