import BannerImage from "../../../public/blog-banner.jpg";

import * as Styles from "./ArticleReadMoreItem.styled";

const ArticleReadMoreItem = () => {
  return (
    <Styles.Wrapper>
      <Styles.Image src={BannerImage.src} />
      <Styles.Title>
        What does a UX designer do & how to become one
      </Styles.Title>
      <Styles.Description>
        The role of a project manager is evolving as businesses evolve. The role
        of a project manager is evolving as businesses evolve.{" "}
      </Styles.Description>
    </Styles.Wrapper>
  );
};

export default ArticleReadMoreItem;
