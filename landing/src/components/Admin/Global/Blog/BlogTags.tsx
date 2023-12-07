import React, { FC, useEffect } from "react";
import { useFormikContext } from "formik";

import Dropdown from "./Dropdown";
import TagItem from "./TagItem";

import * as Styles from "../../../../styles/BlogTags.styled";
import { IArticle } from "../../../../types/Admin/Response.types";

interface IBlogTags {
  chosenTags: string[];
  dropdownTags: string[];
  handleChooseTag: (tag: string) => void;
  handleRemoveTag: (tag: string) => void;
  handleDeclineTag: (tag: string) => void;
}

const BlogTags: FC<IBlogTags> = ({
  chosenTags,
  dropdownTags,
  handleChooseTag,
  handleRemoveTag,
  handleDeclineTag,
}) => {
  const { setFieldValue } = useFormikContext<IArticle>();

  useEffect(() => {
    setFieldValue("tags", chosenTags);
  }, [chosenTags, setFieldValue]);

  return (
    <Styles.TagsWrapper>
      <Dropdown
        dropdownTags={dropdownTags}
        handleRemoveTag={handleRemoveTag}
        handleChooseTag={handleChooseTag}
      />
      <Styles.Container>
        {chosenTags.map((tag, idx) => (
          <TagItem tag={tag} key={idx} onClick={() => handleDeclineTag(tag)} />
        ))}
      </Styles.Container>
    </Styles.TagsWrapper>
  );
};

export default BlogTags;
