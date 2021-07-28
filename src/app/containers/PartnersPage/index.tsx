import React from "react";
import PartnerForm from "../../components/shared/Form/partner-form.component";
import Article from "../../components/Article/article.component";
import MainLayout from "app/components/Layout/Layout";
import * as Styled from "../../components/PartnersArticle/PartnerArticle.styles";
import { GlobalNoUserSelectStyle } from "../../../../styles/global-no-user-select";
import StepsSlider from "app/components/Steps/SliderSteps";
import StepToEarn from "app/components/StepToEarn/StepToEarn";

export const PartnersPage = ({ steps, stepsToEarn }) => {
  return (
    <>
      <GlobalNoUserSelectStyle />
      <MainLayout
        title="Here is your opportunity"
        description="Become our partner and generate your passive income."
        image="https://code-generation-landing-bucket.s3.amazonaws.com/60f6d8a84a2ff400036de285.jpg"
      >
        <div className="main-wraper">
          <Article
            id="partner"
            title="Here is your opportunity"
            desc={"Become our partner and generate your passive income"}
          >
            <Styled.ImgAfterTitle src="/illustrationTitlePartners.svg" loading="lazy" />
          </Article>
          <Article id="steps" title="Benefits you may have with us:">
            <StepsSlider steps={steps} />
          </Article>
          <Article id="steps-to-earn" title="How to earn interest with us?">
            <Styled.Wrapper>
              <Styled.StepToEarn>
                {stepsToEarn.map((stepToEarn, index) => (
                  <StepToEarn key={stepToEarn.id} stepToEarn={stepToEarn} number={index + 1} />
                ))}
                <Styled.ImgAfterBenefits src="/steps_web.png" loading="lazy" />
              </Styled.StepToEarn>
            </Styled.Wrapper>
          </Article>
          <Article id="contact" title={"Start our partnership here!"} hideSepOnMobile={true}>
            <PartnerForm />
          </Article>
        </div>
      </MainLayout>
    </>
  );
};
