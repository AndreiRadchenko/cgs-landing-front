import Article from "../../src/app/components/Article/article.component";
import MainLayout from "../../src/app/components/Layout/Layout";
import BlogArticleFull from "../../src/app/components/BlogArticle/BlogArticleFull/BlogArticleFull";
import { getData } from "../../src/services/api/api";
import { IBlogArticle } from "../../src/types/components";
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
        <Article title="Other articles">
          <SimilarArticles similarArticles={similarArticles} />
        </Article>
        <Styled.ArticleButtonContainer>
          <Button link="/blog/" text="Back to blog"></Button>
        </Styled.ArticleButtonContainer>
      </Styled.Wrapper>
    </div>
  </MainLayout>
);
export const getServerSideProps = async ({ query }) => {
  const id = query.id;

  try {
    const article: IBlogArticle = await getData("article", id);
    const similarArticles: IBlogArticle[] = await getData(
      "similarArticles",
      id
    );

    return {
      props: {
        article,
        similarArticles,
      },
    };
  } catch (error) {
    console.log("error", { error });
    return null;
  }
};

export default BlogArticlePage;
