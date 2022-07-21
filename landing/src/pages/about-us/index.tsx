import React from "react";
import { useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import AboutUs from "../../components/AboutUsPage/AboutUs";
import * as Styled from "../../components/AboutUsPage/AboutUs.styled";
import mediumLine from "../../../public/AboutUsDecorations/mediumLine.svg";

const AboutUsPage = () => {
  useQuery(queryKeys.getFullHomePage, () => adminGlobalService.getFullPage());

  return (
    <>
      <HeaderNavNew />
      <AboutUs />
      <FooterNew />
    </>
  );
};

export default AboutUsPage;
