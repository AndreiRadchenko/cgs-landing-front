﻿import React from "react";
import * as Styled from "../../../styles/AdminPage";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { useFormikContext } from "formik";
import { IDataResponse, IMetaBlock } from "../../../types/Admin/Response.types";

interface IMetaBlockProps {
  theme?: string;
  nestedMeta?: { meta: IMetaBlock };
  nameBefore?: string;
}

const MetaTagsBlock = ({
  theme,
  nestedMeta,
  nameBefore = "",
}: IMetaBlockProps) => {
  const { values, handleChange } = useFormikContext<IDataResponse>();
  const { meta } = nestedMeta ? nestedMeta : values;

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
          name={
            nameBefore != "" ? `${nameBefore}.meta.${el[0]}` : `meta.${el[0]}`
          }
          onChangeFunction={handleChange}
        />
      ))}
    </Styled.AdminPaddedBlock>
  );
};

export default MetaTagsBlock;
