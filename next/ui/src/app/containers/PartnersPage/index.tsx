import React from "react";
import Form from "../../components/shared/Form/form.component";
import Article from "../../components/Article/article.component";
import MainLayout from "app/components/Layout/Layout";
import * as Styled from "../../components/PartnersArticle/PartnerArticle.styles";
import { GlobalNoUserSelectStyle } from "../../../../styles/global-no-user-select";
import StepsSlider from "app/components/Steps/SliderSteps";
import StepToEarn from "app/components/StepToEarn/StepToEarn";

export const PartnersPage = ({ steps, stepsToEarn }) => {
  console.log(stepsToEarn);
  return (
    <>
      <GlobalNoUserSelectStyle />
      <MainLayout
        title="Your 2000$ are near you!"
        description="Become our partner and earn money passively from each closed deal!"
        favicon="/illustrationTitlePartners.ico"
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
              <Styled.StepToEarn>
                {stepsToEarn.map((stepToEarn, index) => (
                  <StepToEarn key={stepToEarn.id} stepToEarn={stepToEarn} number={index + 1} />
                ))}
                <Styled.ImgAfterBenefits src="/steps_web.png  " />
              </Styled.StepToEarn>
            </Styled.Wrapper>
          </Article>
          <Article id="contact" title={"Start our partnership here!"}>
            <Form />
          </Article>
        </div>
      </MainLayout>
    </>
  );
};
