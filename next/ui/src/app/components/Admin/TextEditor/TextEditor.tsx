import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const SunEditor = dynamic(
  () => import('../../../../../node_modules/suneditor-react'),
  {
    ssr: false,
  }
);

const TextEditor = ({ content, setArticleContent, setIsEditorOpen }) => {
  const [articleMarkUpContent, setArticleMarkUpContent] = useState(
    content || ''
  );
  function handleChange(formContent) {
    setArticleMarkUpContent(formContent);
  }
  function handleSave() {
    setArticleContent(articleMarkUpContent);
    setIsEditorOpen(false);
  }
  return (
    <>
      <SunEditor
        setOptions={{
          toolbarContainer: 'editorToolbar',
          stickyToolbar: '-1',
          buttonList: [
            [
              'undo',
              'redo',
              'font',
              'fontSize',
              'formatBlock',
              'paragraphStyle',
              'blockquote',
              'bold',
              'underline',
              'italic',
              'strike',
              'subscript',
              'superscript',
              'fontColor',
              'hiliteColor',
              'textStyle',
              'removeFormat',
              'outdent',
              'indent',
              'align',
              'horizontalRule',
              'list',
              'lineHeight',
              'table',
              'link',
              'image',
              'imageGallery',
              'fullScreen',
              'showBlocks',
              'codeView',
              'preview',
              'template',
            ],
          ],
        }}
        setDefaultStyle="height: 100%; font-size: 30px"
        setContents={content}
        onChange={handleChange}
        hideToolbar={false}
      />
      <button type="button" onClick={() => handleSave}>
        Save
      </button>
      <button type="button" onClick={() => setIsEditorOpen(false)}>
        Close Content Editing
      </button>
    </>
  );
};
export default TextEditor;
