import { useFormikContext } from "formik";
import React from "react";
import {
  AdminHalfGrid,
  AdminPaddedBlock,
  SubtitleGrid,
} from "../../../../styles/AdminPage";
import { IServiceDb } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const ExpertiseBlock = () => {
  const { values, handleChange } = useFormikContext<IServiceDb>();
  return (
    <AdminPaddedBlock theme="dark">
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={values.expertiseBlock.subtitle}
          name={`expertiseBlock.subtitle`}
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {renderInputs({
          props: { name: "expertiseBlock.servers" },
          state: values.expertiseBlock.servers,
          onChangeFunction: handleChange,
        })}
        {renderInputs({
          props: { name: "expertiseBlock.databases" },
          state: values.expertiseBlock.databases,
          onChangeFunction: handleChange,
        })}
      </SubtitleGrid>
    </AdminPaddedBlock>
  );
};

export default ExpertiseBlock;
