import React, { FC } from "react";
import * as Styled from "./LetsGoForm.styled";
import CareersForm from "../CareersForm/Form/index";

const LetsGoForm: FC = () => {
  return (
    <>
      <Styled.FormTitle>
        Are you ready to become a CGS-astronaut?
        <br /> Fill in the form! Our spaceship is always
        <br /> open for new talents!
      </Styled.FormTitle>
      <Styled.FormContainer>
        <CareersForm />
        <Styled.FormImage>
          <Styled.FormCodeImg />
        </Styled.FormImage>
      </Styled.FormContainer>
    </>
  );
};

export default LetsGoForm;
