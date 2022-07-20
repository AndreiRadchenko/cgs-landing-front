import React from "react";
import { Field } from "formik";
import * as Styled from "../../styles/AdminPage";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

interface ITextEditorProps {
  value?: string;
  header: string;
  name: string;
  isBlog: boolean;
}

const TextEditor = ({ name, isBlog, header }: ITextEditorProps) => {
  return (
    <div>
      <Styled.AdminSubTitle isBlog={isBlog}>{header}</Styled.AdminSubTitle>
      <Styled.TextEditorContainer className={!isBlog ? "faq" : ""}>
        <Field name={name}>
          {({ field }: any) => (
            <SunEditor
              height={isBlog ? "376px" : "180px"}
              defaultValue={field.value}
              onChange={field.onChange(field.name)}
              lang="en"
              setOptions={{
                font: ["NAMU"],
                linkRelDefault: {
                  default: undefined,
                  check_new_window: "nofollow",
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
                  [
                    "bold",
                    "underline",
                    "italic",
                    "strike",
                    "subscript",
                    "superscript",
                  ],
                  ["removeFormat"],
                  ["outdent", "indent"],
                  ["list"],
                  ["link", "image", "video"],
                ],
              }}
            />
          )}
        </Field>
      </Styled.TextEditorContainer>
    </div>
  );
};

export default TextEditor;
