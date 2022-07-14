import React, { FC } from "react";
import * as Styled from "./CareersForm.styled";
import Form from "./Form/index";

interface ICareersForm {
  positions: string[];
}

const CareersForm: FC<ICareersForm> = ({ positions = [] }) => {
  return (
    <>
      <Styled.FormContainter>
        <Form positions={positions} />
      </Styled.FormContainter>
    </>
  );
};

export default CareersForm;
