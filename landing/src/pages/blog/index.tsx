import React from "react";
import { Page } from "../../styles/Page.styled";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Footer from "../../components/Footer/Footer";
import BannerImage from "../../../public/blog-banner.jpg";
import { useQuery } from "react-query";
import { IDataResponse } from "../../types/Admin/Response.types";
import { adminGlobalService } from "../../services/adminHomePage";
import { queryKeys } from "../../consts/queryKeys";
import PaginationBar from "../../components/PaginationBar/PaginationBar";

import * as Styles from "../../styles/BlogPage.styled";

interface IHomeData {
  data: IDataResponse | undefined;
  isLoading: boolean;
}

const BlogPage = () => {
  const homeData: IHomeData = useQuery(queryKeys.getFullHomePage, () =>
    adminGlobalService.getFullPage()
  );

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
        <Styles.BlogItem>
          <Styles.BlogItemInfo>
            <Styles.BlogItemTitle>
              What is a project manager?  The key to project success
            </Styles.BlogItemTitle>
            <Styles.BlogItemDescription>
              The role of a project manager is evolving as businesses evolve.
              The role of a project manager  is evolving as businesses evolve.
            </Styles.BlogItemDescription>
          </Styles.BlogItemInfo>
          <Styles.BlogItemImage src={BannerImage.src} />
        </Styles.BlogItem>
        <Styles.BlogItem>
          <Styles.BlogItemInfo>
            <Styles.BlogItemTitle>
              What is a project manager?  The key to project success
            </Styles.BlogItemTitle>
            <Styles.BlogItemDescription>
              The role of a project manager is evolving as businesses evolve.
              The role of a project manager  is evolving as businesses evolve.
            </Styles.BlogItemDescription>
          </Styles.BlogItemInfo>
          <Styles.BlogItemImage src={BannerImage.src} />
        </Styles.BlogItem>
        <Styles.BlogItem>
          <Styles.BlogItemInfo>
            <Styles.BlogItemTitle>
              What is a project manager?  The key to project success
            </Styles.BlogItemTitle>
            <Styles.BlogItemDescription>
              The role of a project manager is evolving as businesses evolve.
              The role of a project manager  is evolving as businesses evolve.
            </Styles.BlogItemDescription>
          </Styles.BlogItemInfo>
          <Styles.BlogItemImage src={BannerImage.src} />
        </Styles.BlogItem>
        <Styles.BlogItem>
          <Styles.BlogItemInfo>
            <Styles.BlogItemTitle>
              What is a project manager?  The key to project success
            </Styles.BlogItemTitle>
            <Styles.BlogItemDescription>
              The role of a project manager is evolving as businesses evolve.
              The role of a project manager  is evolving as businesses evolve.
            </Styles.BlogItemDescription>
          </Styles.BlogItemInfo>
          <Styles.BlogItemImage src={BannerImage.src} />
        </Styles.BlogItem>
        <Styles.BlogItem>
          <Styles.BlogItemInfo>
            <Styles.BlogItemTitle>
              What is a project manager?  The key to project success
            </Styles.BlogItemTitle>
            <Styles.BlogItemDescription>
              The role of a project manager is evolving as businesses evolve.
              The role of a project manager  is evolving as businesses evolve.
            </Styles.BlogItemDescription>
          </Styles.BlogItemInfo>
          <Styles.BlogItemImage src={BannerImage.src} />
        </Styles.BlogItem>
      </Styles.BlogItemsWrapper>
      <PaginationBar />
      <Footer />
    </Styles.PageWrapper>
  );
};

export default BlogPage;
