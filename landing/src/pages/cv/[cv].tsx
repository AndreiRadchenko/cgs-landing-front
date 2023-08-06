import React from "react";

import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";

import {
  Personal,
  InfoSection,
  Skills,
  ProjectsSection,
} from "../../components/CV";

import * as Styled from "../../styles/CV/CV.styled";
import { ICvPageData, CvData } from "../../types/Admin/AdminCv.types";

import { cvData as data } from "../../mock/CvData";

const CV = () => {
  return (
    <>
      <HeaderNavNew />
      <Styled.CvLayout>
        <Personal data={data} />
        <InfoSection data={data} />
        <Skills data={data} />
        <ProjectsSection data={data} />
      </Styled.CvLayout>
      <FooterNew />
    </>
  );
};

export default CV;
