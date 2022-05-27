import React, { useEffect } from "react";
import * as StyledCommon from "../../styles/Page.styled";
import WhatWeLikeToSee from "../../components/WhatWeLikeToSee/WhatWeLikeToSee";
import Footer from "../../components/Footer/Footer";
import { NextPage } from "next";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import LetsGoForm from "../../components/LetsGoForm";
import { useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminVacancyPage";
import { VacancyProps } from "../../types/Admin//AdminVacancy.types";

const LetsGo: NextPage = () => {
  let id: string;
  useEffect(() => {
    id = localStorage.getItem("vacancyId") || "";
  }, []);

  const { data, isLoading }: VacancyProps = useQuery(
    queryKeys.getVacancyPage,
    () => adminGlobalService.getFullPage(id)
  );
  const { contact } = { ...data };
  return (
    <>
      {!isLoading && (
        <>
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
