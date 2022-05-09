import React, { FC } from "react";
import * as Styled from "./CareersForm.styled";
import Form from "./Form/index";

const CareersForm: FC = () => {
  return (
    <>
      <Styled.FormTitle>
        No vacancy for you? Fill in the form!
        <br /> Our spaceship is always
        <br /> open for new talents!
      </Styled.FormTitle>
      <Styled.FormWrapper>
        <Form />
        <Styled.ImageWrapper>
          <Styled.FormRocketImage />
          <Styled.FormImage />
        </Styled.ImageWrapper>
      </Styled.FormWrapper>
    </>
  );
};

export default CareersForm;
