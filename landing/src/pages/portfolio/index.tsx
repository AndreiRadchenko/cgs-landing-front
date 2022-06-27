import React from "react";
import * as Styles from "../../styles/PortfolioPage.styled";
import { Page } from "../../styles/Page.styled";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Footer from "../../components/Footer/Footer";

const Index = () => {
  return (
    <Styles.PageWrapper>
      <Page>
        <HeaderNav />
      </Page>
      <Footer />
    </Styles.PageWrapper>
  );
};

export default Index;
