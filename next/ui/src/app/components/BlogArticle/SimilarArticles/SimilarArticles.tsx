import Link from "next/link";
import sanitize from "sanitize-html";
import { SimilarArticlesProps } from "types/components";
import { Ellipsis } from "../../shared/Ellipsis/Ellipsis";
import * as Styled from "./SimilarArticles.styles";

const SimilarArticles: React.FC<SimilarArticlesProps> = ({ similarArticles }) => (
  <Styled.Wrapper>
    <ul>
      {similarArticles.slice(0, 2).map((article) => {
        return (
          <Styled.SimilarArticle key={article.id}>
            <Link
              href={`/blog/[id]`}
              as={`/blog/${article.id}`}
            >
              <div>
                <img src={article.imageFileUrl} alt={article.title} />
                <h2>{article.title}</h2>
                <Ellipsis
                  text={sanitize(article.content, { allowedTags: [] })}
                  maxLines={2}
                />
              </div>
            </Link>
          </Styled.SimilarArticle>
        );
      })}
    </ul>
  </Styled.Wrapper>
);

export default SimilarArticles;
