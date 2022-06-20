import React from "react";
import Careers from "../../components/Careers";
import CareersForm from "../../components/CareersForm/index";
import { Page } from "../../styles/Page.styled";
import { NextPage } from "next";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminCareersService } from "../../services/adminCareersPage";
import { CareersProps } from "../../types/Admin/Admin.types";
import getServerSideProps from "../../utils/Redirect";
import Head from "next/head";

export { getServerSideProps };

const CarrersPage: NextPage = () => {
  const { data, isLoading }: CareersProps = useQuery(
    queryKeys.getCareerPage,
    () => adminCareersService.getCareersPage()
  );

  return (
    <>
      <Head>
        <title>Careers | CGS-team</title>
        <meta
          name="description"
          content="CGS-team is looking for young talents to join our team and help us build future proof software; checkout our new job postings"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://cgsteam.io/careers" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Careers | CGS-team" />
        <meta
          property="og:description"
          content="CGS-team is looking for young talents to join our team and help us build future proof software; checkout our new job postings"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/previewLink.png" />
        <meta property="og:image:width" content="20" />
        <meta property="og:image:height" content="20" />
      </Head>
      {!isLoading && (
        <>
          <Page>
            <HeaderNav />
            <Careers />
            <CareersForm data={data} />
          </Page>
          <Footer />
        </>
      )}
    </>
  );
};

export default CarrersPage;
