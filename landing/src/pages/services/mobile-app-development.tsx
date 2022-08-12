import React from "react";
import parse from "html-react-parser";
import { dehydrate, QueryClient, useQuery } from "react-query";
import * as Styled from "../../styles/MobileService/Layout";
import HeadBlock from "../../components/MobileService/HeadBlock";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import WorthIt from "../../components/MobileService/WorthIt";
import StrongBlock from "../../components/MobileService/StrongBlock";
import WhoNeedAppBlock from "../../components/MobileService/WhoNeedAppBlock";
import HowDoWeWork from "../../components/MobileService/HowDoWeWork";
import ProfBlock from "../../components/MobileService/ProfBlock";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminMobileService } from "../../services/services/AdminServicesMobilePage";
import Head from "next/head";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.getServiceMobilePage, () =>
    adminMobileService.getMobileServicePage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
const MobileAppDevelopment = () => {
  const { data } = useQuery(queryKeys.getServiceMobilePage, () =>
    adminMobileService.getMobileServicePage()
  );

  useQuery(queryKeys.getFullHomePage, () => adminGlobalService.getFullPage());

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      <HeaderNavNew />
      <Styled.Layout className="worth">
        <HeadBlock />
        <WorthIt />
        <StrongBlock />
        <WhoNeedAppBlock />
        <HowDoWeWork />
        <ProfBlock />
      </Styled.Layout>
      <FooterNew />
    </>
  );
};

export default MobileAppDevelopment;
