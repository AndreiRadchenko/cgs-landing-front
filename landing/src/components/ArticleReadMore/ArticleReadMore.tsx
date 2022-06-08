import ArticleReadMoreItem from "../ArticleReadMoreItem/ArticleReadMoreItem";

import * as Styles from "./ArticleReadMore.styled";

const ArticleReadMore = () => {
  return (
    <Styles.Wrapper>
      <Styles.Title>Read more:</Styles.Title>
      <Styles.ReadMoreItemsWrapper>
        <ArticleReadMoreItem />
        <ArticleReadMoreItem />
      </Styles.ReadMoreItemsWrapper>
    </Styles.Wrapper>
  );
};

export default ArticleReadMore;
