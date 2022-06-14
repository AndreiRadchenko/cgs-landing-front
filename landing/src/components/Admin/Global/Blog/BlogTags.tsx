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

  const componentsArray = (tags: string[]) => {
    return tags.map((tag: string, index: number) =>
      isNewArticle ? newArticleTag(index) : editArticleTag(index)
    );
  };

  useEffect(() => {
    if (isNewArticle) {
      const tags = values.newArticle.tags;
      const result = componentsArray(tags);
      setTagList(result);
    } else {
      const tags = values.articles[article].tags;
      const result = componentsArray(tags);
      setTagList(result);
    }
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
    if (isNewArticle && !article) {
      values.newArticle.tags.push("");
      const index = values.newArticle.tags.length - 1;
      setTagList((oldTagList) => oldTagList.concat(newArticleTag(index)));
    } else {
      values.articles[article].tags.push("");
      const index = values.articles[article].tags.length - 1;
      setTagList((oldTagList) => oldTagList.concat(editArticleTag(index)));
    }
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
