import React from "react";
import Plus from "../../../../../public/plus.svg";

import * as Styles from "../../../../styles/BlogTags.styled";

const BlogTags = () => {
  return (
    <Styles.TagsWrapper>
      <Styles.Tag>front-end developer</Styles.Tag>
      <Styles.Tag>marketing</Styles.Tag>
      <Styles.AddTag>
        <Styles.PlusIcon src={Plus.src} />
      </Styles.AddTag>
    </Styles.TagsWrapper>
  );
};

export default BlogTags;
