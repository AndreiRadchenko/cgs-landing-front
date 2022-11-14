import React, { FC, useCallback, useEffect, useState } from "react";
import * as Styles from "../../../styles/AdminBlogPage";
import Subtitle from "./Subtitle";
import { useFormikContext } from "formik";
import { IArticle } from "../../../types/Admin/Response.types";
import TextEditor from "../../TextEditor/TextEditor";

interface IArticleBlock {
  isNewArticle: boolean;
  article: number;
}

const ArticleBlock: FC<IArticleBlock> = ({ article }) => {
  const { values, handleChange } = useFormikContext<IArticle>();
  const [blocks, setBlocks] = useState<JSX.Element[]>([]);
  const editArticleContent = values?.content;

  const editArticleSubtitle = useCallback(
    (index: number) => (
      <Subtitle
        key={index}
        subtitleValue={values.content[index].subtitle}
        subtitleName={`content[${index}].subtitle`}
        subNumberValue={values.content[index].subNumber}
        subNumberName={`content[${index}].subNumber`}
        handleChange={handleChange}
        tagNameValue={values.content[index].tagName}
        tagName={`content[${index}].tagName`}
      />
    ),
    [handleChange, values]
  );

  const editArticleText = (index: number) => (
    <Styles.TextEditorWrapper key={index}>
      <TextEditor isBlog={true} header="Text" name={`content[${index}].text`} />
    </Styles.TextEditorWrapper>
  );

  useEffect(() => {
    const blocks = editArticleContent.map((block, i) =>
      block.hasOwnProperty("text") ? editArticleText(i) : editArticleSubtitle(i)
    );
    setBlocks(blocks);
  }, [article, values, editArticleContent, handleChange, editArticleSubtitle]);

  const addSubtitleBlockOnClick = () => {
    const subtitle = { subNumber: "", subtitle: "", tagName: "h2" };

    const editArticleCase = () => {
      editArticleContent.push(subtitle);
      setBlocks(
        blocks.concat(editArticleSubtitle(editArticleContent.length - 1))
      );
    };
    editArticleCase();
  };

  const addTextBlockOnClick = () => {
    const text = { text: "" };

    const editArticleCase = () => {
      editArticleContent.push(text);
      setBlocks(blocks.concat(editArticleText(editArticleContent.length - 1)));
    };
    editArticleCase();
  };

  const deleteItem = () => {
    setBlocks(blocks.slice(0, -1));
    values.content.pop();
  };

  return (
    <>
      {blocks}
      <Styles.ButtonsWrapper>
        <Styles.FooterButton onClick={addSubtitleBlockOnClick}>
          + Add Subtitle number and Subtitle
        </Styles.FooterButton>
        <Styles.FooterButton onClick={addTextBlockOnClick}>
          + Add Text
        </Styles.FooterButton>
        {blocks.length !== 0 && (
          <Styles.FooterButton onClick={deleteItem}>
            - Delete Item
          </Styles.FooterButton>
        )}
      </Styles.ButtonsWrapper>
    </>
  );
};

export default ArticleBlock;
