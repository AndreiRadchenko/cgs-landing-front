import { useFormikContext } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import Inputs from "../../../utils/Inputs";

const FilmTextBlock = () => {
  const { values, handleChange } = useFormikContext<IDataResponse>();
  return (
    <div>
      <Styled.AdminHalfGrid>
        <Inputs
          customProps={{ isAdmin: true }}
          onChangeFunction={handleChange}
          name="FilmBlock"
          state={values.FilmBlock}
        />
      </Styled.AdminHalfGrid>
    </div>
  );
};

export default FilmTextBlock;
