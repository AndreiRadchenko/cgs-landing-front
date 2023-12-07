import React from "react";

import { TagWrapper } from "../../../../styles/AdminBlogPage";

interface ITagItemProps {
  tag: string;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagItem = ({ tag, setTags }: ITagItemProps) => {
  const handleDelete = () => {
    setTags((old) => old.filter((item) => item !== tag));
  };

  return (
    <TagWrapper>
      {tag}
      <span onClick={handleDelete}>x</span>
    </TagWrapper>
  );
};

export default TagItem;
