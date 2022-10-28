import { useFormikContext } from "formik";
import React from "react";
import { AdminInput, AdminMobileAuditGrid } from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import { IServiceMobileAudit } from "../../../../types/Admin/Response.types";
import ButtonArrow from "../../../../utils/ButtonArrow";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const WhenDoYouNeedBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IServiceMobileAudit>();

  const handleClick = () => handleSubmit();

  const renderInput = (state: string[]) => {
    return state.map((point, idx) => (
      <SubHeaderWithInput
        maxWidth="336px"
        key={idx}
        header={`${idx + 1}`}
        isAdmin
        inputValue={point}
        name={`whenDoYouNeed.points[${idx}]`}
        onChangeFunction={handleChange}
      />
    ));
  };

  return (
    <AdminBlockDropDown title="WHEN DO YOU NEED AN APPLICATION AUDIT?">
      <AdminInput
        width="421px"
        height="56px"
        isAdmin
        value={values.whenDoYouNeed.subtitle}
        name="whenDoYouNeed.subtitle"
        onChange={handleChange}
      />
      <SubHeaderWithInput
        header="Description"
        width="421px"
        height="56px"
        isAdmin
        inputValue={values.whenDoYouNeed.description}
        name="whenDoYouNeed.description"
        onChangeFunction={handleChange}
      />
      <AdminMobileAuditGrid>
        {renderInput(values.whenDoYouNeed.points)}
      </AdminMobileAuditGrid>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "1em", marginBottom: "2.78em" }}
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

export default WhenDoYouNeedBlock;
