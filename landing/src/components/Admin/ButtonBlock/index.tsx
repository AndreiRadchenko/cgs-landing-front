import { useFormikContext } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import Inputs from "../../../utils/Inputs";

interface IButtonBlock {
  block: { button: string; buttonLink: string };
  name: string;
  isCooperationBlock?: boolean;
}

const ButtonBlock = ({ block, name, isCooperationBlock }: IButtonBlock) => {
  const { handleChange } = useFormikContext<IDataResponse>();

  return (
    <div>
      {isCooperationBlock ? (
        <div>
          <Inputs
            onChangeFunction={handleChange}
            state={block}
            name={name}
            customProps={{ isAdmin: true, isCooperationBlock: true }}
          />
        </div>
      ) : (
        <Styled.AdminHalfGrid>
          <Inputs
            onChangeFunction={handleChange}
            state={block}
            name={name}
            customProps={{ isAdmin: true }}
          />
        </Styled.AdminHalfGrid>
      )}
    </div>
  );
};

export default ButtonBlock;
