import React from "react";
import Form from "../../components/shared/Form/form.component";
import Article from "../../components/Article/article.component";
import MainLayout from "app/components/Layout/Layout";
import * as Styled from "../../components/PartnersArticle/PartnerArticle.styles";
import { GlobalNoUserSelectStyle } from "../../../../styles/global-no-user-select";
import StepsSlider from "app/components/Steps/SliderSteps";
import Interest from "app/components/Interests/Interests";

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
            title="Your 2000$ are near you!"
            desc={"Become our partner and earn money passively\nfrom each closed deal!"}
          >
            <Styled.ImgAfterTitle src="/illustrationTitlePartners.svg" />
          </Article>
          <Article
            id="steps"
            title="Benefits you may have with us:"
            // desc={"Become our partner and earn money passively from each closed deal!"}
          >
            <StepsSlider steps={steps} />
          </Article>
          <Article
            // id="steps"
            title="How to earn interest with us?"
            // desc={"Become our partner and earn money passively from each closed deal!"}
          >
            <Styled.Wrapper>
              <Styled.Interests>
                <Interest />
                <Styled.ImgAfterBenefits src="/interests.jpg" />
              </Styled.Interests>
            </Styled.Wrapper>
          </Article>
          <Article id="contact" title={"Just fill up the form to start our partnership!"}>
            <Form />
          </Article>
        </div>
      </MainLayout>
    </>
  );
};
