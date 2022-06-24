import React from "react";
import * as Styles from "../../styles/PortfolioPage.styled";
import { Page } from "../../styles/Page.styled";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminPortfolioPageService } from "../../services/adminPortfolioPage";
import PortfolioSwipers from "../../components/Admin/PortfolioSwipers/PortfolioSwipers";
import { IPortfolioResponse } from "../../types/Admin/AdminPortfolioPage.types";
import * as Styled from "../../styles/AdminPage";

const Index = () => {
  const { data, isLoading, refetch }: IPortfolioResponse = useQuery(
    queryKeys.getPortfolio,
    () => adminPortfolioPageService.getPortfolio()
  );
  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data ? (
    <Styles.PageWrapper>
      <Page>
        <HeaderNav />
        <PortfolioSwipers data={data} />
      </Page>
      <Footer />
    </Styles.PageWrapper>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default Index;
