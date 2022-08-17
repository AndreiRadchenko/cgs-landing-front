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
        {Object.entries(values.expertiseBlock).map((el, idx) => {
          return (
            idx !== 0 && (
              <div key={`expertiseBlock ${idx}`}>
                {renderInputs({
                  props: { name: `expertiseBlock.${idx}` },
                  state: el[1],
                  onChangeFunction: handleChange,
                })}
              </div>
            )
          );
        })}
      </SubtitleGrid>
    </AdminPaddedBlock>
  );
};

export default ExpertiseBlock;
