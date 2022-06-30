import React, { FC, useEffect, useState } from "react";
import * as Styles from "../../../styles/AdminBlogPage";
import Subtitle from "./Subtitle";
import { useFormikContext } from "formik";
import { IBlogResponse } from "../../../types/Admin/Response.types";
import TextEditor from "../../TextEditor/TextEditor";

interface IArticleBlock {
  isNewArticle: boolean;
  article: number;
}

const ArticleBlock: FC<IArticleBlock> = ({ isNewArticle, article }) => {
  const { values, handleChange } = useFormikContext<IBlogResponse>();
  const [blocks, setBlocks] = useState<JSX.Element[]>([]);
  const newArticleContent = values.newArticle.content;
  const editArticleContent = values.articles[article].content;

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
  }, [article, isNewArticle, values.articles, values.newArticle.content]);

  const addSubtitleBlockOnClick = () => {
    const subtitle = { subNumber: "", subtitle: "" };
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

  const newArticleSubtitle = (index: number): JSX.Element => (
    <Subtitle
      key={index}
      subtitleValue={values.newArticle.content[index].subtitle}
      subtitleName={`newArticle.content[${index}].subtitle`}
      subNumberValue={values.newArticle.content[index].subNumber}
      subNumberName={`newArticle.content[${index}].subNumber`}
      handleChange={handleChange}
    />
  );

  const editArticleSubtitle = (index: number) => (
    <Subtitle
      key={index}
      subtitleValue={values.articles[article].content[index].subtitle}
      subtitleName={`articles[${article}].content[${index}].subtitle`}
      subNumberValue={values.articles[article].content[index].subNumber}
      subNumberName={`articles[${article}].content[${index}].subNumber`}
      handleChange={handleChange}
    />
  );

  const editArticleText = (index: number) => (
    <TextEditor
      isBlog={true}
      key={index}
      header="Text"
      value={values.articles[article].content[index].text}
      name={`articles[${article}].content[${index}].text`}
    />
  );

  const newArticleText = (index: number) => (
    <TextEditor
      isBlog={true}
      key={index}
      value={values.newArticle.content[index].text}
      header="Text"
      name={`newArticle.content[${index}].text`}
    />
  );

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
      </Styles.ButtonsWrapper>
    </>
  );
};

export default ArticleBlock;