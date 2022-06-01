import React from "react";

import * as Styles from "./BlogItem.styled";

interface IBlogItemProps {
  title: string;
  description: string;
  image: string;
}

const BlogItem = ({ title, description, image }: IBlogItemProps) => {
  return (
    <Styles.BlogItem>
      <Styles.BlogItemInfo>
        <Styles.BlogItemTitle>{title}</Styles.BlogItemTitle>
        <Styles.BlogItemDescription>{description}</Styles.BlogItemDescription>
      </Styles.BlogItemInfo>
      <Styles.BlogItemImage src={image} />
    </Styles.BlogItem>
  );
};

export default BlogItem;
