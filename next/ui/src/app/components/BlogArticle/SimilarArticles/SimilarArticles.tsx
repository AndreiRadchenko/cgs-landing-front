import clipString from "../../../../helpers/clipString";
import Link from "next/link";
import { IBlogArticle } from "../../../../types/components";
import * as Styled from "./SimilarArticles.styles";
export interface SimilarArticlesProps {
  similarArticles: IBlogArticle[];
}

const SimilarArticles: React.FC<SimilarArticlesProps> = ({
  similarArticles,
}) => {
  return (
    <Styled.Wrapper>
      <ul>
        {similarArticles.map((article, index) => {
          if (index < 2) {
            return (
              <Styled.SimilarArticle>
                <Link
                  href={`/blog/[id]`}
                  as={`/blog/${article.id}`}
                  key={article.id}
                >
                  <a>
                    <img src={article.imageFileUrl} alt={article.title} />
                    <h2>{article.title}</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: clipString(article.content)!,
                      }}
                    />
                  </a>
                </Link>
              </Styled.SimilarArticle>
            );
          }
        })}
      </ul>
    </Styled.Wrapper>
  );
};

export default SimilarArticles;
