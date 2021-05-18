import MainLayout from '../../src/app/components/Layout/Layout';
import { BlogPage } from '../../src/app/containers/BlogPage';
import { getData } from '../../src/services/api/api';
import { IArticle } from '../../src/types/components';

export default function Blog({ articles }) {
  return (
    <MainLayout title="Blog">
      <BlogPage articles={articles} />
    </MainLayout>
  );
}

export async function getServerSideProps() {
  try {
    const articles: IArticle[] = await getData('articles');
    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}
