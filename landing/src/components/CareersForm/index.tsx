import React, { FC, RefObject } from "react";
import { IDataCareersResponse } from "../../types/Admin/Response.types";
import * as Styled from "./CareersForm.styled";
import Form from "./Form/index";

interface ICareersForm {
  positions: string[];
  data: IDataCareersResponse;
  ourRef: RefObject<HTMLDivElement>;
}

const CareersForm: FC<ICareersForm> = ({ positions = [], data, ourRef }) => {
  return (
    <>
      <Styled.FormContainter>
        <Form positions={positions} data={data} ourRef={ourRef} />
      </Styled.FormContainter>
    </>
  );
};

export default CareersForm;
