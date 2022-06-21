import React, { ChangeEvent } from "react";
import dynamic from "next/dynamic";
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
import "react-quill/dist/quill.snow.css";
import { Field } from "formik";
import themes from "../../utils/themes";
interface ITextEditorProps {
  value?: string;
  header: string;
  name: string;
  isBlog: boolean;
  handleChange: (e?: string | ChangeEvent<any> | undefined) => void;
  setFieldValue?: (value: string) => void;
}
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
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
const TextEditor = ({ name }: ITextEditorProps) => {
  // console.log("editor values", value);
  return (
    <Field name={name}>
      {({ field }: any) => (
        <QuillNoSSRWrapper
          style={{
            border: "none",
            background: "white",
            fontSize: themes.primary.font.size.linkText,
            fontFamily: themes.primary.font.family.mulish,
          }}
          value={field.value}
          modules={modules}
          formats={formats}
          onChange={field.onChange(field.name)}
        />
      )}
    </Field>
  );
};

export default TextEditor;

// import React, { ChangeEvent, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// const SunEditor = dynamic(() => import("suneditor-react"), {
//   ssr: false,
// });
// import "suneditor/dist/css/suneditor.min.css";
// import * as Styled from "../../styles/AdminPage";
// import themes from "../../utils/themes";
//
// interface ITextEditorProps {
//   value?: string;
//   header: string;
//   name: string;
//   isBlog: boolean;
//   handleChange: (e?: string | ChangeEvent<any> | undefined) => void;
// }
//
// export const TextEditor = ({
//   value = "",
//   header,
//   isBlog,
//   name,
//   handleChange,
// }: ITextEditorProps) => {
//   return (
//     <>
//       <Styled.AdminSubTitle isBlog={isBlog}>{header}</Styled.AdminSubTitle>
//       <SunEditor
//         setContents={value}
//         name={name}
//         setOptions={{
//           buttonList: [
//             ["undo", "redo"],
//             ["bold", "underline", "italic", "list"],
//             ["table", "link", "image"],
//             ["fullScreen"],
//             ["align"],
//           ],
//         }}
//         onChange={handleChange}
//         height={"473px"}
//         setDefaultStyle={`
//         font-size: ${themes.primary.font.size.linkText};
//         font-family: ${themes.primary.font.family.mulish};
//         width: 1160px
//         `}
//       />
//     </>
//   );
// };
//
// export default TextEditor;
