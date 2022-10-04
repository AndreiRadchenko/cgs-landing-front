import React, { FC, useCallback, useEffect, useState } from "react";
import Plus from "../../../../../public/plus.svg";

import * as Styles from "../../../../styles/BlogTags.styled";
import { useFormikContext } from "formik";
import { IArticle } from "../../../../types/Admin/Response.types";
import Dropdown from "./Dropdown";

interface IBlogTags {
  isNewArticle: boolean;
  article: number;
  possibleTags: string[];
}

const BlogTags: FC<IBlogTags> = ({ isNewArticle, article, possibleTags }) => {
  const [tagList, setTagList] = useState<JSX.Element[]>([]);
  const { values } = useFormikContext<IArticle>();
  const articleTags = values?.tags;

  const articleTag = useCallback(
    (index: number) => (
      <div key={index}>
        <Dropdown
          name={`tags[${index}]`}
          value={values.tags[index]}
          tags={possibleTags}
        />
      </div>
    ),
    [values.tags, possibleTags]
  );

  const componentsArray = useCallback(() => {
    return articleTags.map((tag, i) => articleTag(i));
  }, [articleTag, articleTags]);

  useEffect(() => {
    const result = componentsArray();
    setTagList(result);
  }, [article, isNewArticle, values, componentsArray]);

  const addTagOnClick = () => {
    const articleCase = () => {
      articleTags.push("");
      const index = articleTags.length - 1;
      setTagList((oldTagList) => oldTagList.concat(articleTag(index)));
    };
    articleCase();
  };

  const deleteItem = () => {
    setTagList(tagList.slice(0, -1));
    values.tags.pop();
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
