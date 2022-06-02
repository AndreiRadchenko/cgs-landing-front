import React from "react";
import { blogItems } from "../../../../consts";
import { AdminSubTitle } from "../../../../styles/AdminBlogPage";
import BlogItem from "../../../BlogItem/BlogItem";
import ChangeIconImg from "../../../../../public/ChangeIcon.svg";

import * as Styles from "../../../../styles/BlogPublishedArticles.styled";

const PublishedArticles = () => {
  return (
    <Styles.Wrapper>
      <AdminSubTitle>Published articles</AdminSubTitle>
      {blogItems.map((item, i) => (
        <BlogItem key={i} isAdmin={true} {...item}>
          <Styles.ChangeIcon src={ChangeIconImg.src} />
          <Styles.DeleteButton>delete articles</Styles.DeleteButton>
        </BlogItem>
      ))}
    </Styles.Wrapper>
  );
};

export default PublishedArticles;
