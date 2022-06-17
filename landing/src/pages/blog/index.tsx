import React from "react";
import { Page } from "../../styles/Page.styled";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Footer from "../../components/Footer/Footer";
import BannerImage from "../../../public/blog-banner.jpg";
import PaginationBar from "../../components/PaginationBar/PaginationBar";
import BlogItem from "../../components/BlogItem/BlogItem";
import { blogItems } from "../../consts";

import * as Styles from "../../styles/BlogPage.styled";

const BlogPage = () => {
  return (
    <Styles.PageWrapper>
      <Page>
        <HeaderNav />
        <Styles.PageHeaderWrapper>
          <Styles.BannerImage src={BannerImage.src} />
          <Styles.PageTitle>NFT. Explained</Styles.PageTitle>
          <Styles.PageDescription>
            The TA project manager's responsibility and roles will vary
            depending on the project, but there is a general framework you can
            easily follow. The TA project manager's responsibility and roles
            will vary depending on the project, but there is a general framework
            you can easily follow.
          </Styles.PageDescription>
        </Styles.PageHeaderWrapper>
      </Page>
      <Styles.BlogItemsWrapper>
        {blogItems.map((props, i) => (
          <BlogItem key={i} {...props} />
        ))}
      </Styles.BlogItemsWrapper>
      <PaginationBar />
      <Footer />
    </Styles.PageWrapper>
  );
};

export default BlogPage;
