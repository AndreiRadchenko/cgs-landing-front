import React, { FC, useEffect } from "react";

import * as Styles from "../../../../styles/BlogTags.styled";
import { useFormikContext } from "formik";
import { IArticle } from "../../../../types/Admin/Response.types";
import Dropdown from "./Dropdown";
import TagItem from "./TagItem";

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
