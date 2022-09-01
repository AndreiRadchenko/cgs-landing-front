import React from "react";
import { useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import Head from "next/head";
import { adminUxUiService } from "../../services/services/AdminServiceUxUiPage";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import parse from "html-react-parser";
import { adminGlobalService } from "../../services/adminHomePage";
import HeadBlock from "../../components/UxUiService/HeadBlock";
import WhatDoWeDoBlock from "../../components/UxUiService/WhatDoWeDoBlock";
import DesignBlock from "../../components/UxUiService/DesignBlock";
import EssentialBlock from "../../components/UxUiService/EsentialBlock";
import FooterBlock from "../../components/UxUiService/FooterBlock";
import * as Styled from "../../styles/UxUiService/Layout.styled";

const UxUiDesign = () => {
  const { data } = useQuery(
    queryKeys.getServiceUxUiPage,
    async () => await adminUxUiService.getUxUiServicePage()
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
        <WhatDoWeDoBlock />
        <DesignBlock />
        <EssentialBlock />
        <FooterBlock />
      </Styled.Layout>
      <FooterNew />
    </>
  );
};

export default UxUiDesign;
