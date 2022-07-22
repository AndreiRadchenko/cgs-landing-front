import React from "react";
import Head from "next/head";
import parse from "html-react-parser";
import Careers from "../../components/Careers";
import CareersForm from "../../components/CareersForm/index";
import { Page, Spinner, SpinnerWrapper } from "../../styles/Page.styled";
import { NextPage } from "next";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminCareersService } from "../../services/adminCareersPage";
import { CareersProps } from "../../types/Admin/Admin.types";
import getServerSideProps from "../../utils/Redirect";
import { adminGlobalService } from "../../services/adminHomePage";
import { IHomeData } from "../../types/Admin/Response.types";
import SpinnerImg from "../../../public/spinner.svg";

export { getServerSideProps };

const CarrersPage: NextPage = () => {
  const { data, isLoading }: CareersProps = useQuery(
    queryKeys.getCareerPage,
    () => adminCareersService.getCareersPage()
  );

  const homeData: IHomeData = useQuery(queryKeys.getFullHomePage, () =>
    adminGlobalService.getFullPage()
  );

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

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
          <Head>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            {customHead && parse(customHead)}
          </Head>
          <SpinnerWrapper>
            <Spinner src={SpinnerImg.src} />
            Website is on ongoing maintenance...
          </SpinnerWrapper>
        </>
      )}
    </>
  );
};

export default CarrersPage;
