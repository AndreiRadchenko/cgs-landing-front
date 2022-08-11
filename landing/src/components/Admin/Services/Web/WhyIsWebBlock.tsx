import { useFormikContext } from "formik";
import React from "react";
import {
  AdminHalfGrid,
  AdminPaddedBlock,
  SubtitleGrid,
} from "../../../../styles/AdminPage";
import { IServiceWeb } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const WhyIsWebBlock = () => {
  const { values, handleChange } = useFormikContext<IServiceWeb>();
  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={values.whyIsWebBlock.subtitle}
          name={`whyIsWebBlock.subtitle`}
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {Object.entries(values.whyIsWebBlock).map((el, idx) => {
          console.log(el);
          return (
            idx !== 0 && (
              <div key={`whyIsWebBlock ${idx}`}>
                {renderInputs({
                  props: { name: `whyIsWebBlock.element${idx}` },
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

export default WhyIsWebBlock;
