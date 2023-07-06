import React, { FC, useEffect, useState } from "react";

import * as Styles from "../../../../styles/BlogTags.styled";
import { useFormikContext } from "formik";
import { IArticle } from "../../../../types/Admin/Response.types";
import Dropdown from "./Dropdown";
import TagItem from "./TagItem";

interface IBlogTags {
  possibleTags: string[];
  resetTrigger: boolean;
}

const BlogTags: FC<IBlogTags> = ({ possibleTags, resetTrigger }) => {
  const { values, setFieldValue } = useFormikContext<IArticle>();
  const [tags, setTags] = useState<string[]>(values.tags);

  useEffect(() => {
    setFieldValue("tags", tags);
  }, [tags, setFieldValue]);

  useEffect(() => {
    setTags([]);
  }, [resetTrigger]);

  return (
    <Styles.TagsWrapper>
      <Dropdown chosenTags={tags} tags={possibleTags} setTags={setTags} />
      <Styles.Container>
        {tags.map((tag, idx) => (
          <TagItem tag={tag} key={`${idx} `} setTags={setTags} />
        ))}
      </Styles.Container>
    </Styles.TagsWrapper>
  );
};

export default BlogTags;
