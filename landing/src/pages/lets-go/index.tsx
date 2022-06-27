import React, { useEffect } from "react";
import Head from "next/head";
import parse from "html-react-parser";
import * as StyledCommon from "../../styles/Page.styled";
import WhatWeLikeToSee from "../../components/WhatWeLikeToSee/WhatWeLikeToSee";
import Footer from "../../components/Footer/Footer";
import { NextPage } from "next";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import LetsGoForm from "../../components/LetsGoForm";
import { useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminVacancyService } from "../../services/adminVacancyPage";
import { adminGlobalService } from "../../services/adminHomePage";
import { VacancyProps } from "../../types/Admin//AdminVacancy.types";
import { IHomeData } from "../../types/Admin/Response.types";

const LetsGo: NextPage = () => {
  let id: string;
  useEffect(() => {
    id = localStorage.getItem("vacancyId") || "";
  }, []);

  const { data, isLoading }: VacancyProps = useQuery(
    queryKeys.getVacancyPage,
    () => adminVacancyService.getFullPage(id)
  );

  const homeData: IHomeData = useQuery(queryKeys.getFullHomePage, () =>
    adminGlobalService.getFullPage()
  );

  const { contact } = { ...data };

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  return (
    <>
      {!isLoading && (
        <>
          <Head>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            {customHead && parse(customHead)}
          </Head>
          <StyledCommon.Page>
            <HeaderNav />
            <WhatWeLikeToSee />
            <LetsGoForm contact={contact} />
          </StyledCommon.Page>
          <Footer />
        </>
      )}
    </>
  );
};

export default LetsGo;
