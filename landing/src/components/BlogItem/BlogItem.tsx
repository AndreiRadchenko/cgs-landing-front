import React from "react";

import * as Styles from "./BlogItem.styled";
import Link from "next/link";

interface IBlogItemProps {
  title: string;
  description: string;
  url: string;
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
  url,
}: IBlogItemProps) => {
  return (
    <Styles.BlogItemContainer isAdmin={isAdmin}>
      {isAdmin ? (
        <Styles.BlogItem isAdmin={isAdmin}>
          <Styles.BlogItemInfo>
            <Styles.BlogItemTitle isAdmin={isAdmin}>
              {title}
            </Styles.BlogItemTitle>
            <Styles.BlogItemDescription isAdmin={isAdmin}>
              {description}
            </Styles.BlogItemDescription>
          </Styles.BlogItemInfo>
          <Styles.BlogItemImage src={image} />
          {children}
        </Styles.BlogItem>
      ) : (
        <Link href={`/blog/${url}`} passHref>
          <Styles.BlogItem isAdmin={isAdmin}>
            <Styles.BlogItemInfo>
              <Styles.BlogItemTitle isAdmin={isAdmin}>
                {title}
              </Styles.BlogItemTitle>
              <Styles.BlogItemDescription isAdmin={isAdmin}>
                {description}
              </Styles.BlogItemDescription>
            </Styles.BlogItemInfo>
            <Styles.BlogItemImage src={image} />
            {children}
          </Styles.BlogItem>
        </Link>
      )}
    </Styles.BlogItemContainer>
  );
};

export default BlogItem;
