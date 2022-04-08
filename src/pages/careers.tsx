import React from "react";
import Careers from "../components/Careers";
import CareersForm from "../components/CareersForm/index";
import { Page } from "../styles/Page.styled";
import HeaderNav from "../components/HeaderNav/HeaderNav";
import Footer from "../components/Footer/Footer";

export default function () {
  return (
    <Page>
      <HeaderNav />
      <Careers />
      <CareersForm />
      <Footer />
    </Page>
  );
}
