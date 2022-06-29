import React, { FC, useEffect, useState } from "react";
import Plus from "../../../../../public/plus.svg";

import * as Styles from "../../../../styles/BlogTags.styled";
import { useFormikContext } from "formik";
import { IBlogResponse } from "../../../../types/Admin/Response.types";

interface IBlogTags {
  isNewArticle: boolean;
  article: number;
}

const BlogTags: FC<IBlogTags> = ({ isNewArticle, article }) => {
  const [tagList, setTagList] = useState<JSX.Element[]>([]);
  const { values, handleChange } = useFormikContext<IBlogResponse>();
  const newArticleTags = values.newArticle.tags;
  const editArticleTags = values.articles[article].tags;

  const componentsArray = () => {
    return isNewArticle
      ? newArticleTags.map((tag, i) => newArticleTag(i))
      : editArticleTags.map((tag, i) => editArticleTag(i));
  };

  useEffect(() => {
    const result = componentsArray();
    setTagList(result);
  }, [article, isNewArticle, values.articles, values.newArticle]);

  const newArticleTag = (index: number) => (
    <Styles.Tag
      name={`newArticle.tags[${index}]`}
      onChange={handleChange}
      value={values.newArticle.tags[index]}
      key={index}
    />
  );

  const editArticleTag = (index: number) => (
    <Styles.Tag
      name={`articles[${article}].tags[${index}]`}
      onChange={handleChange}
      value={values.articles[article].tags[index]}
      key={index}
    />
  );

  const addTagOnClick = () => {
    const newArticleCase = () => {
      newArticleTags.push("");
      const index = newArticleTags.length - 1;
      setTagList((oldTagList) => oldTagList.concat(newArticleTag(index)));
    };
    const editArticleCase = () => {
      editArticleTags.push("");
      const index = editArticleTags.length - 1;
      setTagList((oldTagList) => oldTagList.concat(editArticleTag(index)));
    };
    isNewArticle ? newArticleCase() : editArticleCase();
  };

  return (
    <Styles.TagsWrapper>
      {tagList}
      <Styles.AddTag>
        <Styles.PlusIcon src={Plus.src} onClick={addTagOnClick} />
      </Styles.AddTag>
    </Styles.TagsWrapper>
  );
};

export default BlogTags;
