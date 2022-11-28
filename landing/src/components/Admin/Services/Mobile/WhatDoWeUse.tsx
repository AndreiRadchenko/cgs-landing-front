import { useFormikContext } from "formik";
import dynamic from "next/dynamic";
import React from "react";
import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import { IServiceMobile } from "../../../../types/Admin/Response.types";
const TextEditor = dynamic(() => import("../../../TextEditor/TextEditor"), {
  ssr: false,
});
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const WhatDoWeUse = () => {
  const { values, handleChange } = useFormikContext<IServiceMobile>();
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
    </AdminPaddedBlock>
  );
};

export default WhatDoWeUse;
