import React from "react";
import Careers from "../components/Careers";
import CareersForm from "../components/CareersForm/index";
import { Page } from "../styles/Page.styled";
import { NextPage } from "next";

const CarrersPage: NextPage = () => {
  return (
    <Page>
      <Careers />
      <CareersForm />
    </Page>
  );
};

export default CarrersPage;