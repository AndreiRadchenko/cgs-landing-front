import React, { useState } from "react";
import Plus from "../../../../../public/plus.svg";

import * as Styles from "../../../../styles/BlogTags.styled";
import ArticleBlock from "../../Blog/ArticleBlock";

const BlogTags = () => {
  const [tagList, setTagList] = useState([
    <Styles.Tag key={0}>marketing</Styles.Tag>,
  ]);
  const addTagOnClick = () => {
    setTagList(tagList.concat(<Styles.Tag key={tagList.length} />));
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
