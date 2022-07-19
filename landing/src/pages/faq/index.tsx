import React from "react";
import { useQuery } from "react-query";
import Faq from "../../components/Faq";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";

const FaqPage = () => {
  useQuery(queryKeys.getFullHomePage, () => adminGlobalService.getFullPage());

  return (
    <>
      <HeaderNavNew />
      <Faq />
      <FooterNew />
    </>
  );
};

export default FaqPage;
