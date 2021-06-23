import React from "react";
import * as Styled from "./BlogArticleFull.styles";
import { IBlogArticle } from "../../../../types/components/index";
import dayjs from "dayjs";

const BlogArticleFull: React.FC<{ article: IBlogArticle }> = ({ article }) => (
  <Styled.ArticleWrapper>
    <p className="article__author">Author: {article?.author}</p>
    <p className="article__date">
      {dayjs(article.createdAt).format("DD MMMM YYYY")}
    </p>
    {article.imageFileUrl && (
      <img src={article?.imageFileUrl} alt={article?.title} />
    )}
    {article.content && (
      <Styled.Content>
        <div
          dangerouslySetInnerHTML={{
            __html: article?.content,
          }}
        ></div>
      </Styled.Content>
    )}
    <Styled.TagList>
      {article?.tags &&
        article?.tags?.map((tag) => (
          <li className="article-tag" key={tag?.id}>
            {tag?.name}
          </li>
        ))}
    </Styled.TagList>
  </Styled.ArticleWrapper>
);

export default BlogArticleFull;
