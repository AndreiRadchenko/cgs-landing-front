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
  header?: string;
  name: string;
  isBlog?: boolean;
  onlyColor?: boolean;
  props?: SunEditorReactProps;
}

const TextEditor = ({
  name,
  isBlog = false,
  header,
  onlyColor,
  props,
}: ITextEditorProps) => {
  const options = onlyColor
    ? {
        font: ["NAMU"],
        colorList: [
          "#ccc",
          "#dedede",
          "#5869DD",
          "#BABABA",
          "#000",
          "#fff",
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
          ["fontColor", "hiliteColor"],
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
      {header && (
        <Styled.AdminSubTitle isBlog={isBlog}>{header}</Styled.AdminSubTitle>
      )}
      <Styled.TextEditorContainer className={!isBlog ? "faq" : ""}>
        <Field name={name}>
          {({ field }: any) => (
            <SunEditor
              height={isBlog ? "376px" : "180px"}
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
