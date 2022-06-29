import React from "react";
import * as Styled from "../../../styles/AdminPage";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { useFormikContext } from "formik";
import { IDataResponse } from "../../../types/Admin/Response.types";

interface IMetaBlockProps {
  theme?: string;
}

const MetaTagsBlock = ({ theme }: IMetaBlockProps) => {
  const { values, handleChange } = useFormikContext<IDataResponse>();
  const { meta } = values;

  return (
    <Styled.AdminPaddedBlock theme={theme}>
      {Object.entries(meta).map((el, id) => (
        <SubHeaderWithInput
          key={id}
          header={el[0]
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str: string) => str.toUpperCase())}
          minRows={5}
          inputValue={el[1]}
          name={`meta.${el[0]}`}
          onChangeFunction={handleChange}
        />
      ))}
    </Styled.AdminPaddedBlock>
  );
};

export default MetaTagsBlock;
