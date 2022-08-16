import React from "react";
import { useFormikContext } from "formik";
import { IBlockchainService } from "../../../../types/Admin/Response.types";
import { AdminPaddedBlock, SubtitleGrid } from "../../../../styles/AdminPage";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const AboutBlock = () => {
  const { values, handleChange } = useFormikContext<IBlockchainService>();

  return (
    <AdminPaddedBlock>
      <SubtitleGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          inputValue={values.aboutBlock.subtitle}
          header="Subtitle"
          name="aboutBlock.subtitle"
        />
      </SubtitleGrid>
    </AdminPaddedBlock>
  );
};

export default AboutBlock;
