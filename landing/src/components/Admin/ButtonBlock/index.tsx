import { useFormikContext } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import Inputs from "../../../utils/Inputs";

interface IButtonBlock {
  theme?: string;
  block: { button: string; buttonLink: string };
  name: string;
}

const ButtonBlock = ({ theme, block, name }: IButtonBlock) => {
  const { handleChange } = useFormikContext<IDataResponse>();

  return (
    <Styled.AdminPaddedBlock theme={theme}>
      <Styled.AdminHalfGrid>
        <Inputs onChangeFunction={handleChange} state={block} name={name} />
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default ButtonBlock;
