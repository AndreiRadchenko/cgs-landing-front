import { useFormikContext } from "formik";
import React from "react";
import {
  AdminInput,
  AdminMobileAuditHowDoWeAuditGrid,
} from "../../../../styles/AdminPage";
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
      <AdminInput
        key={idx}
        isAdmin
        maxWidth="453px"
        value={point}
        name={`howDoWeAudit.points[${idx}]`}
        onChange={handleChange}
      />
    ));
  };

  return (
    <AdminBlockDropDown title="HOW DO WE AUDIT APPS?">
      <AdminInput
        width="453px"
        height="56px"
        isAdmin
        value={values.howDoWeAudit.subtitle}
        name="howDoWeAudit.subtitle"
        onChange={handleChange}
      />
      <SubHeaderWithInput
        header="Description"
        width="453px"
        height="56px"
        isAdmin
        inputValue={values.howDoWeAudit.description}
        name="howDoWeAudit.description"
        onChangeFunction={handleChange}
      />
      <AdminMobileAuditHowDoWeAuditGrid>
        {renderInput(values.howDoWeAudit.points)}
      </AdminMobileAuditHowDoWeAuditGrid>
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
