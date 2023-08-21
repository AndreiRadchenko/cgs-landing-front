﻿import { useFormikContext } from "formik";
import dynamic from "next/dynamic";
import React from "react";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IServiceMobile } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

const TextEditor = dynamic(() => import("../../../TextEditor/TextEditor"), {
  ssr: false,
});

const WhatDoWeUse = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IServiceMobile>();

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock theme="dark">
      <AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            header="Subtitle"
            inputValue={values.whatDoWeUse.subtitle}
            onChangeFunction={handleChange}
            name="whatDoWeUse.subtitle"
          />
          <TextEditor header="Text" name="whatDoWeUse.text" />
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

export default WhatDoWeUse;
