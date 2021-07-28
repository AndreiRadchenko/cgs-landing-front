import MainLayout from "../../src/app/components/Layout/Layout";
import { BlogPage } from "../../src/app/containers/BlogPage";
import { SpinnerPage } from "../../src/app/components/SpinnerPage";

import { getData } from "../../src/services/api/api";
import { IArticle } from "../../src/types/components";

const Blog = ({ articles }) => (
  <>
    <SpinnerPage />
    <MainLayout title="Blog">
      <BlogPage articles={articles} />
    </MainLayout>
  </>
);

export const getStaticProps = async () => {
  const articles: IArticle[] = await getData("articles");

  return {
    props: {
      articles,
    },
    revalidate: 30,
  };
};

export default Blog;
