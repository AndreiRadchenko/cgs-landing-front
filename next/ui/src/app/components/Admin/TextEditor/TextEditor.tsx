import React, { useState } from "react";
import dynamic from "next/dynamic";
import * as Styled from "./TextEditor.styles";
import { ButtonWrapper, Button } from "../Form.styles";
import { uploadImage } from "services/api/adminApi";

import "suneditor/dist/css/suneditor.min.css";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const TextEditor = ({ content, setArticleContent, setIsEditorOpen }) => {
  const [articleMarkUpContent, setArticleMarkUpContent] = useState(
    content || ""
  );

  const handleChange = (formContent) => {
    setArticleMarkUpContent(formContent);
  };

  const handleSave = () => {
    setArticleContent(articleMarkUpContent);
    setIsEditorOpen(false);
  };

  const handleEditor = () => handleSave();
  const handleConditionEditor = () => setIsEditorOpen(false);

  return (
    <>
      <Styled.Title>Content of article</Styled.Title>
      <Styled.Wrapper>
        <span>Title</span>
        <div>
          <SunEditor
            placeholder="Write article here"
            setOptions={{
              toolbarContainer: "editorToolbar",
              stickyToolbar: "-1",
              buttonList: [
                [
                  "undo",
                  "redo",
                  "font",
                  "fontSize",
                  "formatBlock",
                  "paragraphStyle",
                  "blockquote",
                  "bold",
                  "underline",
                  "italic",
                  "strike",
                  "subscript",
                  "superscript",
                  "fontColor",
                  "hiliteColor",
                  "textStyle",
                  "removeFormat",
                  "outdent",
                  "indent",
                  "align",
                  "horizontalRule",
                  "list",
                  "lineHeight",
                  "table",
                  "link",
                  "image",
                  "imageGallery",
                  "fullScreen",
                  "showBlocks",
                  "codeView",
                  "preview",
                  "template",
                ],
              ],
            }}
            setDefaultStyle="height: 100%; font-size: 30px"
            setContents={content}
            hideToolbar={false}
            onChange={handleChange}
            onImageUploadBefore={async (files, info, uploadHandler) => {
              let responses: any[];

              try {
                responses = await Promise.all(files.map(uploadImage));
              } catch (error) {
                uploadHandler({
                  errorMessage: error.message,
                });

                return;
              }

              uploadHandler({
                result: responses.map((response) => {
                  return {
                    url: response.s3FileUrl,
                    name: response.name,
                    size: response.size,
                  };
                })
              });
            }}
          />
          <ButtonWrapper>
            <Button empty type="button" onClick={handleEditor}>
              Create
            </Button>
            <Button type="button" onClick={handleConditionEditor}>
              Cancel
            </Button>
          </ButtonWrapper>
        </div>
      </Styled.Wrapper>
    </>
  );
};
export default TextEditor;
