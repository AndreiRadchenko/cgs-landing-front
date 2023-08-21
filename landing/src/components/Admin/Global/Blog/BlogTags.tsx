import React, { FC, useEffect } from "react";
import { useFormikContext } from "formik";

import Dropdown from "./Dropdown";
import TagItem from "./TagItem";

import * as Styles from "../../../../styles/BlogTags.styled";
import { IArticle } from "../../../../types/Admin/Response.types";

interface IBlogTags {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  possibleTags: string[];
}

const BlogTags: FC<IBlogTags> = ({ tags, setTags, possibleTags }) => {
  const { setFieldValue } = useFormikContext<IArticle>();

  useEffect(() => {
    setFieldValue("tags", tags);
  }, [tags, setFieldValue]);

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
