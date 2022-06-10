import React, { FC, useEffect, useState } from "react";
import * as Styles from "../../../styles/AdminBlogPage";
import Subtitle from "./Subtitle";
import ArticleText from "./ArticleText";
import { useFormikContext } from "formik";
import { IBlogResponse } from "../../../types/Admin/Response.types";

interface IArticleBlock {
  isNewArticle: boolean;
  setIsNewArticle: React.Dispatch<React.SetStateAction<boolean>>;
  article: number;
  setArticle: React.Dispatch<React.SetStateAction<number>>;
}

const ArticleBlock: FC<IArticleBlock> = ({ isNewArticle, article }) => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IBlogResponse>();
  const [articleBlockList, setArticleBlockList] = useState<JSX.Element[]>([]);
  // const addBlockOnClick = (component: any) => {
  //   setArticleBlockList(articleBlockList.concat(component));
  // };

  useEffect(() => {
    if (!isNewArticle) {
      const content = values.articles[article].content;
      const componentsArray = content.map((obj, index) => {
        return Object.keys(obj).length < 3 ? (
          <ArticleText
            key={index}
            value={values.articles[article].content[index].text}
            name={`articles[${article}].content[${index}].text`}
            handleChange={handleChange}
          />
        ) : (
          <Subtitle
            key={index}
            subtitleValue={values.articles[article].content[index].subtitle}
            subtitleName={`articles[${article}].content[${index}].subtitle`}
            subNumberValue={values.articles[article].content[index].subNumber}
            subNumberName={`articles[${article}].content[${index}].subNumber`}
            handleChange={handleChange}
          />
        );
      });
      setArticleBlockList(componentsArray);
    } else {
      setArticleBlockList([
        // <Subtitle
        //   key={0}
        //   handleChange={handleChange}
        //   value={values.newArticle.content[0].subtitle}
        //   name={`newArticle.content[${0}].subtitle`}
        // />,
        // <ArticleText
        //   key={1}
        //   handleChange={handleChange}
        //   value={values.newArticle.content[1].text}
        //   name={`newArticle.content[${1}].text`}
        // />,
      ]);
    }
  }, [
    article,
    handleChange,
    isNewArticle,
    values.articles,
    values.newArticle.content,
  ]);

  return (
    <>
      {articleBlockList}
      <Styles.ButtonsWrapper>
        <Styles.FooterButton
        // onClick={() =>
        //   addBlockOnClick(
        //     <Subtitle
        //       key={articleBlockList.length + 1}
        //       handleChange={handleChange}
        //       name={}
        //       value={}
        //     />
        //   )
        // }
        >
          + Add Subtitle number and Subtitle
        </Styles.FooterButton>
        <Styles.FooterButton
        // onClick={() =>
        //   addBlockOnClick(
        //     <ArticleText
        //       key={articleBlockList.length + 1}
        //       handleChange={handleChange}
        //       name={}
        //       value={}
        //     />
        //   )
        // }
        >
          + Add Text
        </Styles.FooterButton>
      </Styles.ButtonsWrapper>
    </>
  );
};

export default ArticleBlock;
