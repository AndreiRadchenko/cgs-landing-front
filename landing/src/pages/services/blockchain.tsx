import React from "react";
import parse from "html-react-parser";
import { useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import Head from "next/head";
import { adminBlockchainService } from "../../services/services/AdminServiceBlockchainPage";
import { adminGlobalService } from "../../services/adminHomePage";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeadBlock from "../../components/BlockchainService/HeadBlock";
import ServicesBlock from "../../components/BlockchainService/ServicesBlock";
import YourWayBlock from "../../components/BlockchainService/YourWayBlock";
import AboutBlock from "../../components/BlockchainService/AboutBlock";
import FooterBlock from "../../components/BlockchainService/FooterBlock";
import * as Styled from "../../styles/BlockchainService/Layout";

const BlockchainService = () => {
  const { data } = useQuery(
    queryKeys.getServiceBlockchainPage,
    async () => await adminBlockchainService.getBlockchainDevelopmentPage()
  );

  useQuery(queryKeys.getFullHomePage, () => adminGlobalService.getFullPage());

  const { customHead, metaDescription, metaTitle } = { ...data?.meta };

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      <HeaderNavNew />
      <Styled.Layout>
        <HeadBlock />
        <ServicesBlock />
        <YourWayBlock />
        <AboutBlock />
        <FooterBlock />
      </Styled.Layout>
      <FooterNew />
    </>
  );
};

export default BlockchainService;