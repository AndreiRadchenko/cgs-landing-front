import { useFormikContext } from "formik";
import React from "react";
import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import { IServiceMobile } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../../utils/ButtonArrow";

const StrongBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IServiceMobile>();

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <SubHeaderWithInput
          header="Subtitle"
          inputValue={values.strongBlock.subtitle}
          onChangeFunction={handleChange}
          name="strongBlock.subtitle"
        />
      </AdminHalfGrid>
      <AdminHalfGrid>
        {Object.entries(values.strongBlock.textBlock).map((el, idx) => (
          <div key={`strongBlock ${idx}`}>
            {renderInputs({
              props: { name: `strongBlock.textBlock.${el[0]}` },
              state: el[1],
              onChangeFunction: handleChange,
            })}
          </div>
        ))}
      </AdminHalfGrid>
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

export default StrongBlock;
