import React, { FC, useCallback, useEffect, useState } from "react";
import * as Styles from "../../../styles/AdminBlogPage";
import Subtitle from "./Subtitle";
import { useFormikContext } from "formik";
import { IArticle, INewArticle } from "../../../types/Admin/Response.types";
import TextEditor from "../../TextEditor/TextEditor";

interface IArticleBlock {
  newArticle: INewArticle;
  isNewArticle: boolean;
  article: number;
}

const ArticleBlock: FC<IArticleBlock> = ({
  isNewArticle,
  article,
  newArticle,
}) => {
  const { values, handleChange } = useFormikContext<IArticle[]>();
  const [blocks, setBlocks] = useState<JSX.Element[]>([]);
  const newArticleContent = newArticle.content;
  const editArticleContent = values[article]?.content;

  const newArticleSubtitle = useCallback(
    (index: number): JSX.Element => (
      <Subtitle
        key={index}
        subtitleValue={newArticle.content[index].subtitle}
        subtitleName={`newArticle.content[${index}].subtitle`}
        subNumberValue={newArticle.content[index].subNumber}
        subNumberName={`newArticle.content[${index}].subNumber`}
        handleChange={handleChange}
        tagNameValue="h2"
        tagName={`newArticle.content[${index}].tagName`}
      />
    ),
    [handleChange, newArticle.content]
  );

  const editArticleSubtitle = useCallback(
    (index: number) => (
      <Subtitle
        key={index}
        subtitleValue={values[article].content[index].subtitle}
        subtitleName={`[${article}].content[${index}].subtitle`}
        subNumberValue={values[article].content[index].subNumber}
        subNumberName={`[${article}].content[${index}].subNumber`}
        handleChange={handleChange}
        tagNameValue={values[article].content[index].tagName}
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
          value={values[article].content[index].text}
          name={`articles[${article}].content[${index}].text`}
        />
      </Styles.TextEditorWrapper>
    ),
    [article, values]
  );

  const newArticleText = useCallback(
    (index: number) => (
      <Styles.TextEditorWrapper key={index}>
        <TextEditor
          isBlog={true}
          value={newArticle.content[index].text}
          header="Text"
          name={`newArticle.content[${index}].text`}
        />
      </Styles.TextEditorWrapper>
    ),
    [newArticle.content]
  );

  useEffect(() => {
    const blocks = isNewArticle
      ? newArticleContent.map((block, i) =>
          block.hasOwnProperty("text")
            ? newArticleText(i)
            : newArticleSubtitle(i)
        )
      : editArticleContent.map((block, i) =>
          block.hasOwnProperty("text")
            ? editArticleText(i)
            : editArticleSubtitle(i)
        );
    setBlocks(blocks);
  }, [
    article,
    isNewArticle,
    values,
    newArticle.content,
    editArticleContent,
    newArticleContent,
    handleChange,
    editArticleSubtitle,
    editArticleText,
    newArticleSubtitle,
    newArticleText,
  ]);

  const addSubtitleBlockOnClick = () => {
    const subtitle = { subNumber: "", subtitle: "", tagName: "h2" };
    const newArticleCase = () => {
      newArticleContent.push(subtitle);
      setBlocks(
        blocks.concat(newArticleSubtitle(newArticleContent.length - 1))
      );
    };
    const editArticleCase = () => {
      editArticleContent.push(subtitle);
      setBlocks(
        blocks.concat(editArticleSubtitle(editArticleContent.length - 1))
      );
    };
    isNewArticle ? newArticleCase() : editArticleCase();
  };

  const addTextBlockOnClick = () => {
    const text = { text: "" };
    const newArticleCase = () => {
      newArticleContent.push(text);
      setBlocks(blocks.concat(newArticleText(newArticleContent.length - 1)));
    };
    const editArticleCase = () => {
      editArticleContent.push(text);
      setBlocks(blocks.concat(editArticleText(editArticleContent.length - 1)));
    };
    isNewArticle ? newArticleCase() : editArticleCase();
  };

  const deleteItem = () => {
    setBlocks(blocks.slice(0, -1));
    isNewArticle ? newArticle.content.pop() : values[article].content.pop();
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
