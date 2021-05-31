import React from 'react';
import * as Styled from './BlogArticle.styles';
import { IBlogArticle } from '../../../types/components/index';
import Link from 'next/link';
import clipString from '../../../helpers/clipString';

const BlogArticle: React.FC<{ article: IBlogArticle }> = ({ article }) => {
  return (
    <React.Fragment>
      <Link href={`/blog/[id]`} as={`/blog/${article.id}`} key={article.id}>
        <a>
          <div className="article__image">
            {article.imageFileUrl && (
              <img src={article.imageFileUrl} alt={article.title} />
            )}
          </div>
          <div className="article__content">
            <Styled.Title>{article.title}</Styled.Title>
            {article.content && (
              <Styled.Content dangerouslySetInnerHTML={{ __html: clipString(article.content)! }} />
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
          <Styled.HorizantalSep />
        </a>
      </Link>
    </React.Fragment>
  );
};
export default BlogArticle;
