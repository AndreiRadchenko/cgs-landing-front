import React from 'react';
import * as Styled from './BlogArticle.styles';
import { IBlogArticle } from '../../../types/components/index';
import Link from 'next/link';

const BlogArticle: React.FC<{ article: IBlogArticle }> = ({ article }) => {
  return (
    // <Styled.Wrapper>
    <Link href={`/blog/[id]`} as={`/blog/${article.id}`} key={article.id}>
      <a>
        {article.imageFileUrl && (
          <img src={article.imageFileUrl} alt={article.title} />
        )}
        <div className="article__content">
          <Styled.Title>{article.title}</Styled.Title>
          {article.content && (
            <Styled.Content>{article.content}</Styled.Content>
          )}
          {article.author && (
            <p className="article__author">{article.author}</p>
          )}
          <Styled.TagList>
            {article.tags &&
              article.tags.map((tag) => (
                <li className="article-tag" key={tag.id}>
                  {tag.name}
                </li>
              ))}
          </Styled.TagList>
        </div>
      </a>
    </Link>
    // </Styled.Wrapper>
  );
};
export default BlogArticle;
