import clipString from "../../../../helpers/clipString";
import Link from "next/link";
import { IBlogArticle } from "../../../../types/components";
import * as Styled from "./SimilarArticles.styles";
export interface SimilarArticlesProps {
  similarArticles: IBlogArticle[];
}

const SimilarArticles: React.FC<SimilarArticlesProps> = ({
  similarArticles,
}) => (
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
                <div>
                  <img src={article.imageFileUrl} alt={article.title} />
                  <h2>{article.title}</h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: clipString(article.content)!,
                    }}
                  />
                </div>
              </Link>
            </Styled.SimilarArticle>
          );
        }
      })}
    </ul>
  </Styled.Wrapper>
);

export default SimilarArticles;
