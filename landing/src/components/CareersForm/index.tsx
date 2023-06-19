import React, { FC, RefObject } from "react";
import { IDataCareersResponse } from "../../types/Admin/Response.types";
import * as Styled from "./CareersForm.styled";
import Form from "./Form/index";

interface ICareersForm {
  positions: string[];
  data: IDataCareersResponse;
}

const CareersForm: FC<ICareersForm> = ({ positions = [], data }) => {
  return (
    <>
      <Styled.FormContainter>
        <Form positions={positions} data={data}/>
      </Styled.FormContainter>
    </>
  );
};

export default CareersForm;
