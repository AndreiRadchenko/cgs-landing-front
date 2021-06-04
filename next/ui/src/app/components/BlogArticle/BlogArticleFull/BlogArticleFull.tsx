import React from "react";
import * as Styled from "./BlogArticleFull.styles";
import { IBlogArticle } from "../../../../types/components/index";

const BlogArticleFull: React.FC<{ article: IBlogArticle }> = ({ article }) => (
  <Styled.ArticleWrapper>
    {article.author && <p className="article__author">{article.author}</p>}
    {article.date && <p className="article__date">{article.date.getDate()}</p>}
    {article.imageFileUrl && (
      <img src={article.imageFileUrl} alt={article.title} />
    )}

    {article.content && (
      <Styled.Content>
        <div
          dangerouslySetInnerHTML={{
            __html: article.content,
          }}
        ></div>
      </Styled.Content>
    )}
    <Styled.TagList>
      {article.tags &&
        article.tags.map((tag) => (
          <li className="article-tag" key={tag.id}>
            {tag.name}
          </li>
        ))}
    </Styled.TagList>
  </Styled.ArticleWrapper>
);

export default BlogArticleFull;
