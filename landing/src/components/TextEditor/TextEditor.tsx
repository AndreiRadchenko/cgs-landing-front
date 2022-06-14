import React, { useEffect, useState } from "react";
const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import { EditorProps } from "react-draft-wysiwyg";
import { ContentState, convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import * as Styled from "../../styles/AdminPage";

interface ITextEditorProps {
  value: string;
  setFieldValue: (val: string) => void;
  header: string;
}

export const TextEditor = ({
  value,
  setFieldValue,
  header,
}: ITextEditorProps) => {
  const [editorState, setEditorState] = useState<EditorState>();

  const prepareDraft = (value: string): EditorState | undefined => {
    const draft = htmlToDraft(value);
    const contentState = ContentState.createFromBlockArray(draft.contentBlocks);
    return EditorState.moveFocusToEnd(
      EditorState.createWithContent(contentState)
    );
  };

  const onEditorStateChange = (editorState: EditorState) => {
    const forFormik = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setFieldValue(forFormik);
    setEditorState(editorState);
  };

  useEffect(() => {
    setEditorState(prepareDraft(value));
  }, [value]);

  return (
    <>
      <Styled.AdminSubTitle isBlog={true}>{header}</Styled.AdminSubTitle>
      <Styled.TextEditorContainer>
        <Editor
          spellCheck
          editorState={editorState}
          editorStyle={{
            overflowWrap: "break-word",
          }}
          onEditorStateChange={onEditorStateChange}
        />
      </Styled.TextEditorContainer>
    </>
  );
};

export default TextEditor;
