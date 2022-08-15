import React from "react";
import { useFormikContext } from "formik";
import {
  AdminPaddedBlock,
  AdminHalfGrid,
  SubtitleGrid,
} from "../../../../styles/AdminPage";
import { ICloudService } from "../../../../types/Admin/Response.types";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const WorkBlock = () => {
  const { values, handleChange } = useFormikContext<ICloudService>();
  const { subtitle, ...blocks } = values.workBlock;

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={subtitle}
          name={`workBlock.subtitle`}
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {Object.entries(blocks).map((el, idx) => (
          <div key={`workBlock.${idx}`}>
            <SubHeaderWithInput
              onChangeFunction={handleChange}
              header={el[0]}
              inputValue={el[1]}
              name={`workBlock.${el[0]}.text`}
            />
          </div>
        ))}
      </SubtitleGrid>
    </AdminPaddedBlock>
  );
};

export default WorkBlock;
