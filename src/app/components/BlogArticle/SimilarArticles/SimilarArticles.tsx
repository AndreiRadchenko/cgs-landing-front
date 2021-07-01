// GIT
import Link from "next/link";
import * as Styled from "./SimilarArticles.styles";
import LinesEllipsis from "react-lines-ellipsis"
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC"
import { SimilarArticlesProps } from "../../../../types/components/index";
import he from "he"

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const SimilarArticles: React.FC<SimilarArticlesProps> = ({
  similarArticles,
}) => (
  <Styled.Wrapper>
    <ul>
      {similarArticles.slice(0, 2).map((article) => {
        return (
          <Styled.SimilarArticle key={article.id}>
            <Link
              href={`/blog/[id]`}
              as={`/blog/${article?.id}`}
            >
              <div>
                <img src={article?.imageFileUrl} alt={article?.title} />
                <h2>{article?.title}</h2>
                {article?.content && (
                  <ResponsiveEllipsis
                    text={he.decode(article?.content.replace(/<\/?[^>]+(>|$)/g, "")) }
                    maxLine="2"
                    ellipsis="..."
                    basedOn="words"
                  />
                )}
              </div>
            </Link>
          </Styled.SimilarArticle>
        );
      })}
    </ul>
  </Styled.Wrapper>
);

export default SimilarArticles;
