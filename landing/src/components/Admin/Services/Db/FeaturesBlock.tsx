import { useFormikContext } from "formik";
import React from "react";
import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import { IServiceDb } from "../../../../types/Admin/Response.types";
import TextEditor from "../../../TextEditor/TextEditor";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import * as Styled from "../../../../styles/AdminPage";

const FeaturesBlock = () => {
  const { values, handleChange } = useFormikContext<IServiceDb>();
  return (
    <AdminPaddedBlock theme="dark">
      <AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            header="Text 1"
            inputValue={values.featuresBlock.databases.subtitle}
            onChangeFunction={handleChange}
            name="featuresBlock.databases.subtitle"
            width="335px"
          />
          <div>
            <Styled.AdminInput
              name="featuresBlock.databases.text1"
              value={values.featuresBlock.databases.text1}
              onChange={handleChange}
            />
            <Styled.AdminInput
              name="featuresBlock.databases.text2"
              value={values.featuresBlock.databases.text2}
              onChange={handleChange}
            />
            <Styled.AdminInput
              name="featuresBlock.databases.text3"
              value={values.featuresBlock.databases.text3}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <SubHeaderWithInput
            header="Text 2"
            inputValue={values.featuresBlock.servers.subtitle}
            onChangeFunction={handleChange}
            name="featuresBlock.servers.subtitle"
            width="335px"
          />
          <div>
            <Styled.AdminInput
              name="featuresBlock.servers.text1"
              value={values.featuresBlock.servers.text1}
              onChange={handleChange}
            />
            <Styled.AdminInput
              name="featuresBlock.servers.text2"
              value={values.featuresBlock.servers.text2}
              onChange={handleChange}
            />
          </div>
        </div>
      </AdminHalfGrid>
    </AdminPaddedBlock>
  );
};

export default FeaturesBlock;
