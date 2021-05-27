import Article from 'app/components/Article/article.component';
import BlogArticle from 'app/components/BlogArticle/BlogArticle';
import React from 'react';
import { IBlogArticle } from 'types/components';
import { scrollEA } from '../../../services/event';
import * as Styled from '../../components/BlogArticle/BlogArticle.styles';

export function BlogPage({ articles }: { articles: IBlogArticle[] }) {
  React.useEffect(() => {
    scrollEA('data-scroll');
  }, []);

  return (
    <div className="main-wraper">
      <Article
        title="Our stories"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      >
        <Styled.Wrapper>
          {articles &&
            articles.map((article, index) => {
              if (index === 0) {
                return (
                  <Styled.FeaturedArticle>
                    <BlogArticle article={article} />
                  </Styled.FeaturedArticle>
                );
              } else {
                return (
                  <Styled.ArticleWrapper>
                    <BlogArticle article={article} />
                  </Styled.ArticleWrapper>
                );
              }
            })}
        </Styled.Wrapper>
      </Article>
    </div>
  );
}
