import React from "react";
import { useFormikContext } from "formik";

import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IServiceDappAudit } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

const WhyIsDappsBlock = () => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IServiceDappAudit>();
  const handleClick = () => handleSubmit();

  return (
    <AdminBlockDropDown title="how can you benefit from AI">
      <SubHeaderWithInput
        inputValue={values.whyIsDappsBlock.subtitle}
        onChangeFunction={handleChange}
        name="whyIsDappsBlock.subtitle"
        placeholder="Title"
        inputStyle={{ maxWidth: "350px" }}
      />
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "10px", marginBottom: "2.78em" }}
        onClick={handleClick}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </AdminBlockDropDown>
  );
};

export default WhyIsDappsBlock;
