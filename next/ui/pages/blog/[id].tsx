import Article from '../../src/app/components/Article/article.component';
import MainLayout from '../../src/app/components/Layout/Layout';
import BlogArticleFull from '../../src/app/components/BlogArticle/BlogArticleFull/BlogArticleFull';
import { getData } from '../../src/services/api/api';
import { IBlogArticle } from '../../src/types/components';
import SimilarArticles from '../../src/app/components/BlogArticle/SimilarArticles/SimilarArticles';
import Button from '../../src/app/components/shared/LinkButton/Button';
import * as Styled from '../../src/app/components/BlogArticle/BlogArticleFull/BlogArticleFull.styles';

export default function BlogArticlePage({ article, similarArticles }) {
  //mock content
  //   article.content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus lorem, euismod sed mauris sed, rhoncus scelerisque nibh. Phasellus consectetur rutrum est, vitae ultrices felis luctus quis. Suspendisse et laoreet leo. Nam orci leo, lacinia in tristique bibendum, rhoncus sed turpis. Morbi eleifend neque purus, et imperdiet risus vestibulum consequat. Fusce ultricies, dui non feugiat fermentum, nisl augue dignissim ex, eu sagittis libero neque sed dui. Sed vel mollis felis. Phasellus et ligula convallis, euismod nunc quis, tempor lectus. Pellentesque rutrum, ipsum sed tincidunt convallis, turpis justo scelerisque leo, nec vestibulum diam lectus nec augue.

  // Proin accumsan sapien vitae rhoncus placerat. Integer cursus laoreet nibh, at ornare dui sodales in. Praesent laoreet mattis ipsum, mollis maximus sapien pharetra a. Maecenas vestibulum eros sed mollis consectetur. Suspendisse vel posuere sapien. Donec accumsan orci quis consequat molestie. Praesent eu posuere ligula. Sed efficitur at purus et tincidunt. Pellentesque tempus augue nec lectus condimentum, quis gravida tortor consequat. Vestibulum euismod nisi non leo fringilla suscipit. Fusce sit amet dolor in neque ornare bibendum. Aenean quis sapien ac nulla mattis pretium.

  // Pellentesque suscipit eros a luctus semper. Aliquam sit amet nibh ullamcorper, auctor velit vel, accumsan metus. Praesent libero nibh, consectetur ac volutpat ut, fermentum sed dolor. Ut varius nulla et nulla convallis, posuere egestas erat lobortis. Duis id malesuada ex. Vestibulum dictum augue non massa elementum blandit. Nulla varius vulputate porttitor. Donec pulvinar vehicula erat in venenatis. Aliquam erat volutpat. Duis et ipsum sollicitudin, dignissim nibh ac, dictum enim. Praesent vitae eros id neque rhoncus cursus. In consequat, metus nec tincidunt commodo, massa nibh varius ipsum, a vehicula nulla leo nec turpis. Suspendisse consequat metus vitae nibh suscipit commodo. Sed quis laoreet odio.

  // Morbi vestibulum purus et augue dignissim, quis efficitur nisl tincidunt. Quisque sit amet semper erat. Maecenas nec tempor nunc. Nunc sit amet malesuada lorem, pretium condimentum ante. Suspendisse potenti. Maecenas eget blandit elit. Praesent id ligula erat. Suspendisse scelerisque arcu quam, eget viverra felis eleifend sit amet. Phasellus lorem felis, suscipit vitae tincidunt at, rhoncus a mauris. Suspendisse scelerisque et ipsum blandit rutrum. Nam nec neque ipsum. Donec massa tellus, maximus eu nisl et, ornare porta ex. Praesent et egestas nisl.

  // Nullam suscipit ultricies lorem, vel pretium purus iaculis ut. Maecenas ultricies ultrices ex ut rhoncus. Vivamus tristique interdum dolor. Nam ac tortor ligula. Duis posuere tellus nec dolor bibendum, imperdiet rhoncus lacus tempus. Phasellus eu porta nulla. Sed iaculis, lectus in efficitur sagittis, nisi arcu feugiat elit, vitae fermentum nunc ex ut ligula. Duis et nibh viverra, dapibus velit in, aliquet sem. Mauris in mi dui. Aliquam volutpat augue dapibus, pretium eros quis, rutrum lectus. Praesent venenatis nunc lorem, vitae auctor sem ultrices in. Maecenas mattis diam ac libero commodo efficitur. Vestibulum ut neque dui. Aenean sodales turpis et placerat convallis.`;
  return (
    <MainLayout>
      <div className="main-wraper">
        <Styled.Wrapper>
          <Article title={article.title}>
            <BlogArticleFull article={article} />
          </Article>
          <Article title="Other articles">
            <SimilarArticles
              similarArticles={similarArticles}
            ></SimilarArticles>
          </Article>
          <div className="articleButton">
            <Button link="/blog/" text="Back to blog"></Button>
          </div>
        </Styled.Wrapper>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const article: IBlogArticle = await getData('article', id);
    const similarArticles: IBlogArticle[] = await getData(
      'similarArticles',
      id
    );
    return {
      props: {
        article,
        similarArticles,
      },
    };
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}
