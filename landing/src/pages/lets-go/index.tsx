import React, { useEffect, useState } from "react";
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
import { CareersProps } from "../../types/Admin/Admin.types";
import { adminCareersService } from "../../services/adminCareersPage";

const LetsGo: NextPage = () => {
  const [id, setId] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("vacancyId") || "");
  }, []);
  const { data: careersData }: CareersProps = useQuery(
    queryKeys.GetCareersPage,
    () => adminCareersService.getCareersPage()
  );
  const { data, isLoading }: VacancyProps = useQuery(
    queryKeys.getVacancyPage,
    () => adminVacancyService.getFullPage(id)
  );

  const homeData: IHomeData = useQuery(queryKeys.getFullHomePage, () =>
    adminGlobalService.getFullPage()
  );

  const { contact } = { ...data };
  const { vacancy = "" } = {
    ...careersData?.tickets.filter((el) => el.id === id)[0],
  };
  return (
    <>
      {!isLoading && (
        <>
          <StyledCommon.Page>
            <HeaderNav />
            <WhatWeLikeToSee />
            <LetsGoForm contact={contact} vacancy={vacancy} />
          </StyledCommon.Page>
          <Footer />
        </>
      )}
    </>
  );
};

export default LetsGo;
