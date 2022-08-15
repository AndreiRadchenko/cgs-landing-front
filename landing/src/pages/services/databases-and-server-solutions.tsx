import React from "react";
import { useQuery } from "react-query";
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

const MobileAppDevelopment = () => {
  useQuery(queryKeys.getServiceMobilePage, () =>
    adminMobileService.getMobileServicePage()
  );

  useQuery(queryKeys.getFullHomePage, () => adminGlobalService.getFullPage());
  return (
    <>
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
