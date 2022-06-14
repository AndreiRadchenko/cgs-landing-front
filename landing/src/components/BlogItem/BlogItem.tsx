import React from "react";

import * as Styles from "./BlogItem.styled";

interface IBlogItemProps {
  title: string;
  description: string;
  image?: string;
  isAdmin?: boolean;
  children?: React.ReactNode;
}

const BlogItem = ({
  title,
  description,
  image,
  isAdmin = false,
  children,
}: IBlogItemProps) => {
  return (
    <Styles.BlogItem isAdmin={isAdmin}>
      <Styles.BlogItemInfo>
        <Styles.BlogItemTitle>{title}</Styles.BlogItemTitle>
        <Styles.BlogItemDescription>{description}</Styles.BlogItemDescription>
      </Styles.BlogItemInfo>
      <Styles.BlogItemImage src={image} />
      {children}
    </Styles.BlogItem>
  );
};

export default BlogItem;
