import React, { FC, useEffect, useState } from "react";
import Plus from "../../../../../public/plus.svg";

import * as Styles from "../../../../styles/BlogTags.styled";
import { useFormikContext } from "formik";
import { IBlogResponse } from "../../../../types/Admin/Response.types";
import Dropdown from "./Dropdown";

interface IBlogTags {
  isNewArticle: boolean;
  article: number;
}

const BlogTags: FC<IBlogTags> = ({ isNewArticle, article }) => {
  const [tagList, setTagList] = useState<JSX.Element[]>([]);
  const { values } = useFormikContext<IBlogResponse>();
  const newArticleTags = values.newArticle.tags;
  const editArticleTags = values.articles[article]?.tags;

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
    <div>
      <Dropdown
        name={`newArticle.tags[${index}]`}
        value={values.newArticle.tags[index]}
        tags={values.newArticle.possibleTags}
      />
    </div>
  );

  const editArticleTag = (index: number) => (
    <div>
      <Dropdown
        name={`articles[${article}].tags[${index}]`}
        value={values.articles[article].tags[index]}
        tags={values.newArticle.possibleTags}
      />
    </div>
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

  const deleteItem = () => {
    setTagList(tagList.slice(0, -1));
    isNewArticle
      ? values.newArticle.tags.pop()
      : values.articles[article].tags.pop();
  };

  return (
    <Styles.TagsWrapper>
      {tagList}
      <Styles.AddTag onClick={addTagOnClick}>
        <Styles.PlusIcon src={Plus.src} />
      </Styles.AddTag>
      <Styles.AddTag onClick={deleteItem}>
        <Styles.Minus>-</Styles.Minus>
      </Styles.AddTag>
    </Styles.TagsWrapper>
  );
};

export default BlogTags;
