import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminDappAuditService } from "../../services/services/adminServicesDappAuditPage";
import { NextPage } from "next";
import Head from "next/head";
import parse from "html-react-parser";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import React, { useState } from "react";
import FooterNew from "../../components/FooterNew/FooterNew";
import { Layout, PageArticle } from "../../styles/Layout.styled";
import * as Styled from "../../styles/AiService/Common.styled";
import HeadBlock from "../../components/Ai/HeadBlock";
import FigureOutBlock from "../../components/Ai/FigureOutBlock";
import HowDoProvideBlock from "../../components/Ai/HowDoProvideBlock";
import ShowCase from "../../components/ShowCase";
import FooterBlock from "../../components/Ai/FooterBlock";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";
import { Loader, LoaderStub } from "../../components/Loader";
import { calendlyPopupInfoHandler } from "../../utils/calendlyPopupInfoHandler";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const DappAuditPage: NextPage = () => {
  const { data, isLoading } = useQuery(
    [queryKeys.getServiceDappAuditPage],
    () => adminDappAuditService.getDappAuditServicePage()
  );
  const [isCalendlySuccessfull, setIsCalendlySuccessfull] = useState(false);

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  calendlyPopupInfoHandler(() => setIsCalendlySuccessfull(true));

  return (
    <Loader active={isLoading}>
      {isLoading ? (
        <LoaderStub />
      ) : (
        <>
          {isCalendlySuccessfull && (
            <CalendlyInfoModal
              isOpen={isCalendlySuccessfull}
              setIsCalendlySuccessfull={setIsCalendlySuccessfull}
            />
          )}
          <Head>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            {customHead && parse(customHead)}
          </Head>
          <HeaderNavNew />
          <PageArticle>
            <Layout>
              <Styled.Layout>
                <HeadBlock />
                <FigureOutBlock />
                <HowDoProvideBlock />
              </Styled.Layout>
            </Layout>
            <ShowCase projects={data?.projects} />
            <Layout>
              <Styled.Layout>
                <FooterBlock />
              </Styled.Layout>
            </Layout>
          </PageArticle>
          <FooterNew />
        </>
      )}
    </Loader>
  );
};

export default DappAuditPage;
