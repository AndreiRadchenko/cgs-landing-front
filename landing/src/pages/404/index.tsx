import React from "react";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import NotFoundContent from "../../components/NotFoundPage/NotFoundPage";
import { Layout } from "../../styles/Layout.styled";

const NotFoundPage = () => {
  return (
    <Layout>
      <HeaderNavNew />
      <NotFoundContent />
    </Layout>
  );
};

export default NotFoundPage;
