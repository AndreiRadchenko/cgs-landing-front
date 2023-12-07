import React from "react";

import { TagWrapper } from "../../../../styles/AdminBlogPage";

interface ITagItemProps {
  tag: string;
  onClick: () => void;
}

const TagItem = ({ tag, onClick }: ITagItemProps) => {
  return (
    <TagWrapper>
      {tag}
      <span onClick={onClick}>x</span>
    </TagWrapper>
  );
};

export default TagItem;
