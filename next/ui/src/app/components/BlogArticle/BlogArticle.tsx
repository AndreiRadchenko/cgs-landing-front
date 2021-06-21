import React from "react";
import * as Styled from "./BlogArticle.styles";
import { IBlogArticle } from "../../../types/components/index";
import Link from "next/link";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";

const BlogArticle: React.FC<{ article: IBlogArticle }> = ({ article }) => {
  return (
    <React.Fragment>
      <Link href={`/blog/[id]`} as={`/blog/${article.id}`} key={article.id}>
        <a>
          <Styled.ImageContainer>
            {article.imageFileUrl && (
              <img src={article.imageFileUrl} alt={article.title} />
            )}
          </Styled.ImageContainer>
          <div className="article__content">
            <Styled.Title>{article.title}</Styled.Title>
            {article.content && (
              <HTMLEllipsis
                unsafeHTML={article.content}
                maxLine="2"
                ellipsis="..."
                basedOn="words"
              />
            )}
            <Styled.TagList>
              {article.tags &&
                article.tags.map((tag) => (
                  <Styled.ArticleTag key={tag.id}>{tag.name}</Styled.ArticleTag>
                ))}
            </Styled.TagList>
          </div>
          <Styled.HorizontalSep />
        </a>
      </Link>
    </React.Fragment>
  );
};
export default BlogArticle;
