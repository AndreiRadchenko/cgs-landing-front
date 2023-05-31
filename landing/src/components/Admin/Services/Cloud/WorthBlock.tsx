import React from "react";
import { useFormikContext } from "formik";
import {
  AdminPaddedBlock,
  AdminHalfGrid,
  SubtitleGrid,
} from "../../../../styles/AdminPage";
import { ICloudService } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const WorthBlock = () => {
  const { values, handleChange } = useFormikContext<ICloudService>();
  const { subtitle, ...blocks } = values.worthBlock;

  return (
    <AdminPaddedBlock theme="dark" style={{ paddingInline: 0 }}>
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={subtitle}
          name={`worthBlock.subtitle`}
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {Object.entries(blocks).map((el, idx) => {
          return (
            <div key={idx}>
              {renderInputs({
                props: { name: `worthBlock.${el[0]}` },
                state: el[1],
                onChangeFunction: handleChange,
              })}
            </div>
          );
        })}
      </SubtitleGrid>
    </AdminPaddedBlock>
  );
};

export default WorthBlock;
