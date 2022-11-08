import React from "react";
import { useFormikContext } from "formik";
import { IServiceDappAudit } from "../../../../types/Admin/Response.types";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import { WhyIsDappsSubtitlesWrapper } from "../../../../styles/DappAuditService/AdminDappAudit.styled";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../../utils/ButtonArrow";

const WhyIsDappsBlock = () => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IServiceDappAudit>();
  const handleClick = () => handleSubmit();

  return (
    <AdminBlockDropDown title="Why is a dapps audit important?">
      <SubHeaderWithInput
        inputValue={values.whyIsDappsBlock.subtitle}
        onChangeFunction={handleChange}
        name="whyIsDappsBlock.subtitle"
        placeholder="Title"
        inputStyle={{ maxWidth: "350px" }}
      />
      <WhyIsDappsSubtitlesWrapper>
        {values.whyIsDappsBlock.textBlock.map((item, idx) => (
          <SubHeaderWithInput
            key={idx}
            inputValue={item}
            onChangeFunction={handleChange}
            name={`whyIsDappsBlock.textBlock[${idx}]`}
            placeholder="Title"
            header={`Subtitle ${idx + 1}`}
          />
        ))}
      </WhyIsDappsSubtitlesWrapper>
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
