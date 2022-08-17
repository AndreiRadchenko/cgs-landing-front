import { useFormikContext } from "formik";
import React from "react";
import {
  AdminHalfGrid,
  AdminPaddedBlock,
  SubtitleGrid,
} from "../../../../styles/AdminPage";
import { IServiceSupport } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const SubtitleBlock = () => {
  const { values, handleChange } = useFormikContext<IServiceSupport>();
  return (
    <AdminPaddedBlock theme="dark">
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={values.howDoWeWorkBlock.subtitle}
          name={`howDoWeWorkBlock.subtitle`}
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {Object.entries(values.howDoWeWorkBlock).map((el, idx) => {
          return (
            idx !== 0 && (
              <div key={`howDoWeWorkBlock ${idx}`}>
                {renderInputs({
                  props: { name: `howDoWeWorkBlock.${el[0]}` },
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

export default SubtitleBlock;
