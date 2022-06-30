import React from "react";

import * as Styles from "./BlogItem.styled";
import Link from "next/link";

interface IBlogItemProps {
  title: string;
  description: string;
  image?: string;
  isAdmin?: boolean;
  children?: React.ReactNode;
  id?: string;
}

const BlogItem = ({
  title,
  description,
  image,
  isAdmin = false,
  children,
  id,
}: IBlogItemProps) => {
  return (
    <Styles.BlogItemContainer isAdmin={isAdmin}>
      <Styles.BlogItem isAdmin={isAdmin}>
        <Styles.BlogItemInfo>
          {!isAdmin ? (
            <Link href={`/blog/articles/${id}`} passHref>
              <Styles.BlogItemTitle isAdmin={isAdmin}>
                {title}
              </Styles.BlogItemTitle>
            </Link>
          ) : (
            <Styles.BlogItemTitle isAdmin={isAdmin}>
              {title}
            </Styles.BlogItemTitle>
          )}
          <Styles.BlogItemDescription isAdmin={isAdmin}>
            {description}
          </Styles.BlogItemDescription>
        </Styles.BlogItemInfo>
        <Styles.BlogItemImage src={image} />
        {children}
      </Styles.BlogItem>
    </Styles.BlogItemContainer>
  );
};

export default BlogItem;
