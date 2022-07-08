import React, { useState } from "react";
import dynamic from "next/dynamic";
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
import "react-quill/dist/quill.snow.css";
import { Field } from "formik";
import * as Styled from "../../styles/AdminPage";

interface ITextEditorProps {
  value?: string;
  header: string;
  name: string;
  isBlog: boolean;
}

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const TextEditor = ({ name, isBlog, header }: ITextEditorProps) => {
  const [active, setIsActive] = useState(false);
  const styles = {
    background: "white",
    div: {
      border: 0,
    },
    height: "376px",
  };

  return (
    <div
      onMouseOut={() => {
        setIsActive(false);
      }}
    >
      <Styled.AdminSubTitle isBlog={isBlog}>{header}</Styled.AdminSubTitle>
      <Styled.TextEditorContainer
        height={"417px"}
        onMouseOver={() => {
          setIsActive(true);
        }}
        active={active}
      >
        <Field name={name}>
          {({ field }: any) => (
            <QuillNoSSRWrapper
              style={styles}
              value={field.value}
              modules={modules}
              formats={formats}
              onChange={field.onChange(field.name)}
            />
          )}
        </Field>
      </Styled.TextEditorContainer>
    </div>
  );
};

export default TextEditor;
