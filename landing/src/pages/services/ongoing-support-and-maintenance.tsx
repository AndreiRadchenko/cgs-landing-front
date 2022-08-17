import React from "react";
import parse from "html-react-parser";
import { useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminOngoingService } from "../../services/services/AdminServiceOngoingPage";
import Head from "next/head";
import { adminGlobalService } from "../../services/adminHomePage";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeadBlock from "../../components/OngoingSupport/HeadBlock";
import WorkBlock from "../../components/OngoingSupport/WorkBlock";
import ProvidesBlock from "../../components/OngoingSupport/ProvidesBlock";
import BonusesBlock from "../../components/OngoingSupport/BonusesBlock";
import FooterBlock from "../../components/OngoingSupport/FooterBlock";
import * as Styled from "../../styles/OngoingSupport/Layout";

const OngoingSupport = () => {
  const { data } = useQuery(queryKeys.getOngoingSupportPage, async () => {
    const data = await adminOngoingService.getOngoingServicePage();
    console.log(data);
    return data;
  });

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
        <WorkBlock />
        <ProvidesBlock />
        <BonusesBlock />
        <FooterBlock />
      </Styled.Layout>
      <FooterNew />
    </>
  );
};

export default OngoingSupport;
