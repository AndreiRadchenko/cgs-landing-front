import React from "react";
import Link from "next/link";
import sanitize from "sanitize-html";
import { IBlogArticle } from "types/components";
import { Ellipsis } from "../shared/Ellipsis/Ellipsis";
import * as Styled from "./BlogArticle.styles";

const BlogArticle: React.FC<{ article: IBlogArticle }> = ({ article }) => {
  return (
    <Link key={article.id} href={`/blog/[id]`} as={`/blog/${article.id}`}>
      <a>
        <Styled.ImageContainer>
          {article.imageFileUrl && (
            <img src={article.imageFileUrl} alt={article.title} loading="lazy"/>
          )}
        </Styled.ImageContainer>
        <Styled.ContentContainer className="article__content"> 
          <Styled.Title>{article.title}</Styled.Title>
          <Ellipsis
            text={sanitize(article.content, { allowedTags: [] })}
            maxLines={2}
          />
          <Styled.TagList>
            {article.tags.map((tag) => (
              <Styled.ArticleTag key={tag.id}>
                {tag.name}
              </Styled.ArticleTag>
            ))}
          </Styled.TagList>
        </Styled.ContentContainer>
        <Styled.HorizontalSep />
      </a>
    </Link>
  );
};

export default BlogArticle;
