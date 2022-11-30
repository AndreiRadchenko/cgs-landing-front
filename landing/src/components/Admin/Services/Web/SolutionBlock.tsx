import { useFormikContext } from "formik";
import dynamic from "next/dynamic";
import React from "react";
import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import { IServiceWeb } from "../../../../types/Admin/Response.types";
const TextEditor = dynamic(() => import("../../../TextEditor/TextEditor"), {
  ssr: false,
});
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const SolutionBlock = () => {
  const { values, handleChange } = useFormikContext<IServiceWeb>();
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
    </AdminPaddedBlock>
  );
};

export default SolutionBlock;
