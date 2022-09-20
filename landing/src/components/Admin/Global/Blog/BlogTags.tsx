import React, { FC, useCallback, useEffect, useState } from "react";
import Plus from "../../../../../public/plus.svg";

import * as Styles from "../../../../styles/BlogTags.styled";
import { useFormikContext } from "formik";
import { IArticle, INewArticle } from "../../../../types/Admin/Response.types";
import Dropdown from "./Dropdown";

interface IBlogTags {
  isNewArticle: boolean;
  article: number;
  newArticle: INewArticle;
}

const BlogTags: FC<IBlogTags> = ({ isNewArticle, article, newArticle }) => {
  const [tagList, setTagList] = useState<JSX.Element[]>([]);
  const { values } = useFormikContext<IArticle[]>();
  const newArticleTags = newArticle.tags;
  const editArticleTags = values[article]?.tags;

  const newArticleTag = useCallback(
    (index: number) => (
      <div key={index}>
        <Dropdown
          name={`newArticle.tags[${index}]`}
          value={newArticle.tags[index]}
          tags={newArticle.possibleTags}
        />
      </div>
    ),
    [newArticle.possibleTags, newArticle.tags]
  );

  const editArticleTag = useCallback(
    (index: number) => (
      <div key={index}>
        <Dropdown
          name={`[${article}].tags[${index}]`}
          value={values[article].tags[index]}
          tags={newArticle.possibleTags}
        />
      </div>
    ),
    [article, newArticle.possibleTags, values]
  );

  const componentsArray = useCallback(() => {
    return isNewArticle
      ? newArticleTags.map((tag, i) => newArticleTag(i))
      : editArticleTags.map((tag, i) => editArticleTag(i));
  }, [
    editArticleTag,
    editArticleTags,
    isNewArticle,
    newArticleTag,
    newArticleTags,
  ]);

  useEffect(() => {
    const result = componentsArray();
    setTagList(result);
  }, [article, isNewArticle, values, newArticle, componentsArray]);

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
    isNewArticle ? newArticle.tags.pop() : values[article].tags.pop();
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
