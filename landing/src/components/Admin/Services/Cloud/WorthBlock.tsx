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
import TextEditor from "../../../TextEditor/TextEditor";

const WorthBlock = () => {
  const { values, handleChange } = useFormikContext<ICloudService>();
  const { subtitle, ...blocks } = values.worthBlock;
  console.log(values.worthBlock);

  return (
    <AdminPaddedBlock theme="dark">
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={subtitle}
          name={`worthBlock.subtitle`}
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {Object.entries(blocks).map((el, idx) => (
          <div key={`worthBlock.${idx}`}>
            <SubHeaderWithInput
              onChangeFunction={handleChange}
              inputValue={el[1].subtitle}
              header={`Subtitle${idx + 1}`}
              name={`worthBlock.${el[0]}.subtitle`}
            />
            <TextEditor
              header="Text"
              name={`worthBlock.${el[0]}.text`}
              isBlog={false}
              onlyColor={true}
            />
          </div>
        ))}
      </SubtitleGrid>
    </AdminPaddedBlock>
  );
};

export default WorthBlock;
