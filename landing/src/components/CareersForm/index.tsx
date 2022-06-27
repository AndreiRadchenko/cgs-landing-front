import React, { FC } from "react";
import * as Styled from "./CareersForm.styled";
import Form from "./Form/index";
import { SplitBrackets } from "../../utils/splitBrackets";
import { IDataCareersResponse } from "../../types/Admin/Response.types";

interface ICareersForm {
  data?: IDataCareersResponse;
}

const CareersForm: FC<ICareersForm> = ({ data }) => {
  return (
    <>
      <Styled.FormTitle>
        <SplitBrackets text={data?.subtitle2} />
      </Styled.FormTitle>
      <Styled.FormWrapper>
        <Form data={data?.form} vacancy="All vacancies" />
        <Styled.ImageWrapper>
          <Styled.FormRocketImage />
          <Styled.FormImage image={data?.form.image} />
        </Styled.ImageWrapper>
      </Styled.FormWrapper>
    </>
  );
};

export default CareersForm;
