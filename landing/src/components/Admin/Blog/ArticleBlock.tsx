import React, { FC, useEffect, useState } from "react";
import * as Styles from "../../../styles/AdminBlogPage";
import Subtitle from "./Subtitle";
import ArticleText from "./ArticleText";
import { useFormikContext } from "formik";
import { IBlogResponse, ITextBlog } from "../../../types/Admin/Response.types";

interface IArticleBlock {
  isNewArticle: boolean;
  article: number;
}

const ArticleBlock: FC<IArticleBlock> = ({ isNewArticle, article }) => {
  const { values, handleChange } = useFormikContext<IBlogResponse>();
  const [articleBlockList, setArticleBlockList] = useState<JSX.Element[]>([]);

  const componentsArray = (content: ITextBlog[]) => {
    return content.map((obj: ITextBlog, index: number) =>
      isNewArticle
        ? obj.hasOwnProperty("text")
          ? newArticleText(index)
          : newArticleSubtitle(index)
        : obj.hasOwnProperty("text")
        ? editArticleText(index)
        : editArticleSubtitle(index)
    );
  };

  useEffect(() => {
    if (isNewArticle) {
      const content = values.newArticle.content;
      const result = componentsArray(content);
      setArticleBlockList(result);
    } else {
      const content = values.articles[article].content;
      const result = componentsArray(content);
      setArticleBlockList(result);
    }
  }, [article, isNewArticle, values.articles, values.newArticle]);

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
    <ArticleText
      key={index}
      value={values.articles[article].content[index].text}
      name={`articles[${article}].content[${index}].text`}
      handleChange={handleChange}
    />
  );

  const newArticleText = (index: number) => (
    <ArticleText
      key={index}
      value={values.newArticle.content[index].text}
      name={`newArticle.content[${index}].text`}
      handleChange={handleChange}
    />
  );

  const addTextBlockOnClick = () => {
    if (isNewArticle && !article) {
      values.newArticle.content.push({ text: "" });
      const index = values.newArticle.content.length - 1;
      setArticleBlockList(articleBlockList.concat(newArticleText(index)));
    } else {
      values.articles[article].content.push({ text: "" });
      const index = values.articles[article].content.length - 1;
      setArticleBlockList(articleBlockList.concat(editArticleText(index)));
    }
  };

  const addSubtitleBlockOnClick = () => {
    if (isNewArticle && !article) {
      values.newArticle.content.push({ subtitle: "", subNumber: "" });
      const index = values.newArticle.content.length - 1;
      const subtitle = newArticleSubtitle(index);
      setArticleBlockList((oldList) => oldList.concat(subtitle));
    } else {
      values.articles[article].content.push({ subtitle: "", subNumber: "" });
      const index = values.newArticle.content.length - 1;
      const subtitle = editArticleSubtitle(index);
      setArticleBlockList((oldList) => oldList.concat(subtitle));
    }
  };

  return (
    <>
      {articleBlockList}
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
