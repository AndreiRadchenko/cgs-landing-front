import { useFormikContext } from "formik";
import React from "react";
import {
  AdminHalfGrid,
  AdminInput,
  AdminPaddedBlock,
  AdminSubtitleGrid,
} from "../../../../styles/AdminPage";
import { IServiceWeb } from "../../../../types/Admin/Response.types";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../../utils/ButtonArrow";

const ComparisonBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IServiceWeb>();

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock theme="dark">
      <AdminSubtitleGrid>
        <div>
          <AdminHalfGrid>
            <SubHeaderWithInput
              header="Subtitle"
              inputValue={values.comparisonBlock.desktopColumn.subtitle}
              onChangeFunction={handleChange}
              name="comparisonBlock.desktopColumn.subtitle"
            />
          </AdminHalfGrid>
          {values.comparisonBlock.desktopColumn.list.map((el, idx) => (
            <AdminInput
              key={`comparison block desktop ${idx}`}
              value={el}
              onChange={handleChange}
              name={`comparisonBlock.desktopColumn.list[${idx}]`}
            />
          ))}
        </div>
        <div>
          <AdminHalfGrid>
            <SubHeaderWithInput
              header="Subtitle"
              inputValue={values.comparisonBlock.webColumn.subtitle}
              onChangeFunction={handleChange}
              name="comparisonBlock.webColumn.subtitle"
            />
          </AdminHalfGrid>
          {values.comparisonBlock.webColumn.list.map((el, idx) => (
            <AdminInput
              key={`comparison block web ${idx}`}
              value={el}
              onChange={handleChange}
              name={`comparisonBlock.webColumn.list[${idx}]`}
            />
          ))}
        </div>
      </AdminSubtitleGrid>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "1.33em" }}
        onClick={handleClick}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </AdminPaddedBlock>
  );
};

export default ComparisonBlock;
