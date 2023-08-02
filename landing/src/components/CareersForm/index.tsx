import React, { FC } from "react";

import Form from "./Form/index";

import * as Styled from "./CareersForm.styled";

import { ICareersForm } from "../../types/Company.types";

const CareersForm: FC<ICareersForm> = ({ positions = [], data }) => {
  return (
    <>
      <Styled.FormContainter>
        <Form positions={positions} data={data} />
      </Styled.FormContainter>
    </>
  );
};

export default CareersForm;
