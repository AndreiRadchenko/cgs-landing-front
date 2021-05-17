import React from 'react';
import * as Styled from './BlogArticleFull.styles';
import { IBlogArticle } from '../../../../types/components/index';

const BlogArticleFull: React.FC<{ article: IBlogArticle }> = ({ article }) => {
  return (
    <Styled.Wrapper>
      {article.author && <p className="article__author">{article.author}</p>}
      {article.date && (
        <p className="article__date">{article.date.getDate()}</p>
      )}
      {article.imageFileUrl && (
        <img src={article.imageFileUrl} alt={article.title} />
      )}

      {article.content && <Styled.Content>{article.content}</Styled.Content>}
    </Styled.Wrapper>
  );
};
export default BlogArticleFull;
