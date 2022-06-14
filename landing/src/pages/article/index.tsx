import React from "react";
import { Page } from "../../styles/Page.styled";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import BannerImage from "../../../public/blog-banner.jpg";
import ArticleAuthor from "../../components/ArticleAuthor/ArticleAuthor";
import ArticleDescription from "../../components/ArticleDescription/ArticleDescription";
import ShareOn from "../../components/ShareOn/ShareOn";
import ArticleTags from "../../components/ArticleTags/ArticleTags";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "react-query";
import { IDataResponse } from "../../types/Admin/Response.types";
import { adminGlobalService } from "../../services/adminHomePage";
import { queryKeys } from "../../consts/queryKeys";
import ArrowBack from "../../../public/arrowBack.svg";

import * as Styles from "../../styles/ArticlePage.styled";
import ArticleReadMore from "../../components/ArticleReadMore/ArticleReadMore";

interface IHomeData {
  data: IDataResponse | undefined;
  isLoading: boolean;
}

const ArticlePage = () => {
  const homeData: IHomeData = useQuery(queryKeys.getFullHomePage, () =>
    adminGlobalService.getFullPage()
  );

  return (
    <Page>
      <HeaderNav />
      <Styles.PageWrapper>
        <Styles.ArrowBackButton src={ArrowBack.src} />
        <Styles.Title>NFT.Explained</Styles.Title>
        <Styles.SubTitle>
          The TA project manager's responsibility and roles will vary depending
          on the project, but there is a general framework you can easily
          follow. The TA project manager's responsibility and roles will vary
          depending on the project, but there is a general framework you can
          easily follow.
        </Styles.SubTitle>
        <Styles.BannerImage src={BannerImage.src} />
        <ArticleAuthor />
        <ArticleDescription />
        <Styles.ShareTagsWrapper>
          <ShareOn />
          <ArticleTags />
        </Styles.ShareTagsWrapper>
        <ArticleReadMore />
      </Styles.PageWrapper>
      <Footer />
    </Page>
  );
};

export default ArticlePage;
