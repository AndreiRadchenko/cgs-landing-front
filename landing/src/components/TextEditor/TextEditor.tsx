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
  mainPage?: boolean;
}

const TextEditor = ({ name, isBlog, header, mainPage }: ITextEditorProps) => {
  const options = mainPage
    ? {
        font: ["NAMU"],
        colorList: [
          "#ccc",
          "#dedede",
          "#5869DD",
          "#000",
          "OrangeRed",
          "Orange",
          "RoyalBlue",
          "SaddleBrown",
          "SlateGray",
          "BurlyWood",
          "DeepPink",
          "FireBrick",
          "Gold",
          "SeaGreen",
        ],
        linkRelDefault: {
          default: undefined,
          check_new_window: "nofollow",
        },
        buttonList: [
          ["fontColor"],
          [
            "font",
            "bold",
            "underline",
            "italic",
            "strike",
            "subscript",
            "superscript",
          ],
        ],
      }
    : {
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
          ["bold", "underline", "italic", "strike", "subscript", "superscript"],
          ["removeFormat"],
          ["outdent", "indent"],
          ["list"],
          ["link", "image", "video"],
        ],
      };
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
              setOptions={options}
            />
          )}
        </Field>
      </Styled.TextEditorContainer>
    </div>
  );
};

export default TextEditor;
