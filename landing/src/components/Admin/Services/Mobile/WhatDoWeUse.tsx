import { useFormikContext } from "formik";
import React from "react";
import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import { IServiceMobile } from "../../../../types/Admin/Response.types";
import TextEditor from "../../../TextEditor/TextEditor";
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
          <TextEditor
            header="Text"
            name="whatDoWeUse.text"
            isBlog={false}
            onlyColor={true}
          />
        </div>
      </AdminHalfGrid>
    </AdminPaddedBlock>
  );
};

export default WhatDoWeUse;
