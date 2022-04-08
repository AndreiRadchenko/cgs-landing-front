import React from "react";
import Careers from "../components/Careers";
import CareersForm from "../components/CareersForm/index";
import { Page } from "../styles/Page.styled";

export default function () {
  return (
    <Page>
      <Careers />
      <CareersForm />
    </Page>
  );
}
