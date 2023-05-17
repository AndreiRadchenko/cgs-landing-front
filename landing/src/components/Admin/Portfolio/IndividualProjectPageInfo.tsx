import React from "react";
import { useFormikContext } from "formik";

import SubHeaderWithInput from "../Global/SubHeaderWithInput";

import * as Styled from "../../../styles/AdminPortfolio";

import { IPortfolioPageData } from "../../../types/Admin/AdminPortfolio.types";
import SaveBtn from "../Global/SaveBtn";

const IndividualProjectPageInfo = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IPortfolioPageData>();

  return (
    <div>
      <Styled.IndividualTopGridContainer>
        <SubHeaderWithInput
          placeholder="Feedback"
          header="FEEDBACK BLOCK"
          inputValue={values.individualProjectPage.feedback}
          onChangeFunction={handleChange}
          name="individualProjectPage.feedback"
        />
        <SubHeaderWithInput
          placeholder="Text"
          header="TITLE OF ADDITIONAL PROJECTS"
          inputValue={values.individualProjectPage.additionalProjects}
          onChangeFunction={handleChange}
          name="individualProjectPage.additionalProjects"
        />
        <SubHeaderWithInput
          placeholder="Text"
          header="CTA"
          inputValue={values.individualProjectPage.cta}
          onChangeFunction={handleChange}
          name="individualProjectPage.cta"
        />
      </Styled.IndividualTopGridContainer>
      <Styled.IndividualBottomGridContainer>
        <SubHeaderWithInput
          placeholder="Text"
          header="Button"
          inputValue={values.individualProjectPage.button}
          onChangeFunction={handleChange}
          name="individualProjectPage.button"
        />
        <SubHeaderWithInput
          placeholder="Text"
          header="Button link"
          inputValue={values.individualProjectPage.buttonLink}
          onChangeFunction={handleChange}
          name="individualProjectPage.buttonLink"
        />
      </Styled.IndividualBottomGridContainer>
      <SaveBtn handleClick={handleSubmit} />
    </div>
  );
};

export default IndividualProjectPageInfo;
