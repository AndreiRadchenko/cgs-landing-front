import Link from "next/link";
import { IBlogArticle } from "../../../../types/components";
import * as Styled from "./SimilarArticles.styles";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";

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
                  <HTMLEllipsis
                    unsafeHTML={article.content}
                    maxLine="2"
                    ellipsis="..."
                    basedOn="words"
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
