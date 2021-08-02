import Article from "../../src/app/components/Article/article.component";
import MainLayout from "../../src/app/components/Layout/Layout";
import BlogArticleFull from "../../src/app/components/BlogArticle/BlogArticleFull/BlogArticleFull";
import { getData } from "../../src/services/api/api";
import SimilarArticles from "../../src/app/components/BlogArticle/SimilarArticles/SimilarArticles";
import Button from "../../src/app/components/shared/LinkButton/Button";
import * as Styled from "../../src/app/components/BlogArticle/BlogArticleFull/BlogArticleFull.styles";

const BlogArticlePage = ({ article, similarArticles }) => (
  <MainLayout>
    <div className="main-wraper">
      <Styled.Wrapper>
        <Article title={article.title}>
          <BlogArticleFull article={article} />
        </Article>
        <Article title="Another articles">
          <SimilarArticles similarArticles={similarArticles} />
        </Article>
        <Styled.ArticleButtonContainer>
          <Button link="/blog/" text="Back to blog" />
        </Styled.ArticleButtonContainer>
      </Styled.Wrapper>
    </div>
  </MainLayout>
);

export const getStaticProps = async ({ params }) => {
  const [article, similarArticles] = await Promise.all([
    getData("article", params.id),
    getData("similarArticles", params.id),
  ]);

  return {
    props: {
      article,
      similarArticles,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const articles = await getData("articles");

  return {
    paths: articles.map((article) => ({
      params: {
        id: article.id,
      },
    })),
    fallback: false,
  };
};
 
export default BlogArticlePage;
