import { useFormikContext } from "formik";
import dynamic from "next/dynamic";
import React from "react";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IServiceWeb } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

const TextEditor = dynamic(() => import("../../../TextEditor/TextEditor"), {
  ssr: false,
});

const SolutionBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IServiceWeb>();

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock theme="dark">
      <AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            header="Subtitle"
            inputValue={values.solutionBlock.subtitle}
            onChangeFunction={handleChange}
            name="solutionBlock.subtitle"
            width="335px"
          />
          <TextEditor header="Text" name="solutionBlock.text" />
        </div>
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

export default SolutionBlock;
