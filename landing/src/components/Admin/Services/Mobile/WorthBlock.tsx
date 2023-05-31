import { useFormikContext } from "formik";
import React from "react";
import {
  AdminHalfGrid,
  AdminPaddedBlock,
  SubtitleGrid,
} from "../../../../styles/AdminPage";
import { IServiceMobile } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const WorthBlock = () => {
  const { values, handleChange } = useFormikContext<IServiceMobile>();
  return (
    <AdminPaddedBlock theme="dark" style={{ padding: 0 }}>
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={values.worthBlock.subtitle}
          name={`worthBlock.subtitle`}
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {Object.entries(values.worthBlock.textBlock).map((el, idx) => (
          <div key={`worthBlock ${idx}`}>
            {renderInputs({
              props: { name: `worthBlock.textBlock.${el[0]}` },
              state: el[1],
              onChangeFunction: handleChange,
            })}
          </div>
        ))}
      </SubtitleGrid>
    </AdminPaddedBlock>
  );
};

export default WorthBlock;
