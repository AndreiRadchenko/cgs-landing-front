// import React, { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// const Editor = dynamic<EditorProps>(
//   () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
//   { ssr: false }
// );
// import { EditorProps } from "react-draft-wysiwyg";
// import { ContentState, convertToRaw, EditorState } from "draft-js";
// import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import * as Styled from "../../styles/AdminPage";
// import { useFormikContext } from "formik";
//
// interface ITextEditorProps {
//   value?: string;
//   // setFieldValue: (val: string) => void;
//   header: string;
//   name: string;
//   index: number;
//   isUpdating: boolean;
// }
//
// export const TextEditor = ({
//   value,
//   header,
//   index,
//   name,
//   isUpdating,
// }: ITextEditorProps) => {
//   const [editorState, setEditorState] = useState<EditorState>(
//     value
//       ? EditorState.createWithContent(
//           ContentState.createFromBlockArray(htmlToDraft(value).contentBlocks)
//         )
//       : EditorState.createEmpty()
//   );
//   const { setFieldValue } = useFormikContext();
//   const setValue = (value: string) => setFieldValue(name, value);
//   const prepareDraft = (value: string): EditorState | undefined => {
//     const draft = htmlToDraft(value);
//     const contentState = ContentState.createFromBlockArray(draft.contentBlocks);
//     return EditorState.createWithContent(contentState);
//   };
//
//   const onEditorStateChange = (editorState: EditorState) => {
//     if (isUpdating) {
//       const forFormik = draftToHtml(
//         convertToRaw(editorState.getCurrentContent())
//       );
//       console.log(forFormik);
//       setValue(forFormik);
//     }
//     setEditorState(editorState);
//   };
//
//   return (
//     <>
//       <Styled.AdminSubTitle isBlog={true}>{header}</Styled.AdminSubTitle>
//       <Styled.TextEditorContainer>
//         <Editor
//           editorState={editorState}
//           editorStyle={{
//             overflowWrap: "break-word",
//           }}
//           onEditorStateChange={onEditorStateChange}
//         />
//       </Styled.TextEditorContainer>
//     </>
//   );
// };
//
// export default TextEditor;

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
