import React from "react";
import Careers from "../components/Careers";
import CareersForm from "../components/CareersForm/index";
import { Page } from "../styles/Page.styled";
import { NextPage } from "next";
import HeaderNav from "../components/HeaderNav/HeaderNav";
import Footer from "../components/Footer/Footer";

const CarrersPage: NextPage = () => {
  return (
    <>
      <Page>
        <HeaderNav />
        <Careers />
        <CareersForm />
      </Page>
      <Footer />
    </>
  );
};

export default CarrersPage;
