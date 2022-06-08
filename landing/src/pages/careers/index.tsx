import React from "react";
import Careers from "../../components/Careers";
import CareersForm from "../../components/CareersForm/index";
import { Page } from "../../styles/Page.styled";
import { NextPage } from "next";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminCareersService } from "../../services/adminCareersPage";
import { CareersProps } from "../../types/Admin/Admin.types";
import { IHomeData } from "../../types/Admin/Response.types";
import getServerSideProps from "../../utils/Redirect";

export { getServerSideProps };

const CarrersPage: NextPage = () => {
  const { data, isLoading }: CareersProps = useQuery(
    queryKeys.getCareerPage,
    () => adminCareersService.getCareersPage()
  );

  const homeData: IHomeData = useQuery(queryKeys.getFullHomePage, () =>
    adminGlobalService.getFullPage()
  );

  return (
    <>
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
