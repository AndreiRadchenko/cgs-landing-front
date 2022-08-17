import React from "react";
import { useFormikContext } from "formik";
import {
  AdminHalfGrid,
  AdminPaddedBlock,
  SubtitleGrid,
} from "../../../../styles/AdminPage";
import { IBlockchainService } from "../../../../types/Admin/Response.types";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const WayBlock = () => {
  const { values, handleChange } = useFormikContext<IBlockchainService>();
  console.log(values.wayBlock);

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          inputValue={values.wayBlock.subtitle}
          header="Subtitle"
          name="wayBlock.subtitle"
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {[...values.wayBlock.textSubBlock].map((el, idx) => (
          <div key={idx}>
            <SubHeaderWithInput
              onChangeFunction={handleChange}
              inputValue={el}
              header={`Text ${idx + 1}`}
              name={`wayBlock.textSubBlock[${idx}]`}
            />
          </div>
        ))}
      </SubtitleGrid>
    </AdminPaddedBlock>
  );
};

export default WayBlock;
