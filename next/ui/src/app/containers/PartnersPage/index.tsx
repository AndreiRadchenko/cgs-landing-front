import React from "react";
import Form from "../../components/shared/Form/form.component";
import Article from "../../components/Article/article.component";
import MainLayout from "app/components/Layout/Layout";
import * as Styled from "../../components/PartnersArticle/PartnerArticle.styles";
import { GlobalNoUserSelectStyle } from "../../../../styles/global-no-user-select";
import StepsSlider from "app/components/Steps/SliderSteps";

export const PartnersPage = ({ steps }) => {
  return (
    <>
      <GlobalNoUserSelectStyle />
      <MainLayout
        title="Code Generation Software | Landing"
        description="Let's bring your idea into life together"
      >
        <div className="main-wraper">
          <Article
            id="partner"
            title="Become our partner"
            desc={
              "Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          >
            <Styled.ImgAfterTitle src="/illustrationTitlePartners.svg" />
          </Article>
          <Article
            id="steps"
            title="Steps of the work"
            desc={
              "Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          >
            <StepsSlider steps={steps} />
          </Article>

          <Article id="contact" title={"Text for contact form"}>
            <Form />
          </Article>
        </div>
      </MainLayout>
    </>
  );
};
