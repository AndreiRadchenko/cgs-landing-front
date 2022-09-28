import React, { FC, useCallback, useEffect, useState } from "react";
import * as Styles from "../../../styles/AdminBlogPage";
import Subtitle from "./Subtitle";
import { useFormikContext } from "formik";
import { IArticle } from "../../../types/Admin/Response.types";
import TextEditor from "../../TextEditor/TextEditor";

interface IArticleBlock {
  // newArticle: INewArticle;
  isNewArticle: boolean;
  article: number;
}

const ArticleBlock: FC<IArticleBlock> = ({
  // isNewArticle,
  article,
  // newArticle,
}) => {
  const { values, handleChange } = useFormikContext<IArticle>();
  const [blocks, setBlocks] = useState<JSX.Element[]>([]);
  // const newArticleContent = newArticle.content;
  const editArticleContent = values?.content;

  const editArticleSubtitle = useCallback(
    (index: number) => (
      <Subtitle
        key={index}
        subtitleValue={values.content[index].subtitle}
        subtitleName={`[${article}].content[${index}].subtitle`}
        subNumberValue={values.content[index].subNumber}
        subNumberName={`[${article}].content[${index}].subNumber`}
        handleChange={handleChange}
        tagNameValue={values.content[index].tagName}
        tagName={`articles[${article}].content[${index}].tagName`}
      />
    ),
    [article, handleChange, values]
  );

  const editArticleText = useCallback(
    (index: number) => (
      <Styles.TextEditorWrapper key={index}>
        <TextEditor
          isBlog={true}
          header="Text"
          value={values.content[index].text}
          name={`articles[${article}].content[${index}].text`}
        />
      </Styles.TextEditorWrapper>
    ),
    [article, values]
  );

  useEffect(() => {
    const blocks = editArticleContent.map((block, i) =>
      block.hasOwnProperty("text") ? editArticleText(i) : editArticleSubtitle(i)
    );
    setBlocks(blocks);
  }, [
    article,
    values,
    editArticleContent,
    handleChange,
    editArticleSubtitle,
    editArticleText,
  ]);

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
