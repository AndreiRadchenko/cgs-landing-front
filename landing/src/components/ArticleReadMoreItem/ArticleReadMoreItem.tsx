import React from "react";
<<<<<<< HEAD
=======
import BannerImage from "../../../public/blog-banner.jpg";

>>>>>>> 0befeb5c001f25183d1bc927a42df8a3aa66c1f6
import * as Styles from "./ArticleReadMoreItem.styled";
import { IArticle } from "../../types/Admin/Response.types";
import Link from "next/link";

interface IArticleReadMore {
  article: IArticle;
}

const ArticleReadMoreItem = ({ article }: IArticleReadMore) => {
  return (
    <Styles.Wrapper>
      <Styles.Image src={article.image.url} />
      <Link href={`/blog/articles/${article._id}`} passHref>
        <Styles.Title>{article.title}</Styles.Title>
      </Link>
      <Styles.Description>{article.description}</Styles.Description>
    </Styles.Wrapper>
  );
};

export default ArticleReadMoreItem;
