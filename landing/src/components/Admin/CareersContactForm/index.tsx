import React from "react";
import { useFormikContext } from "formik";
import { IDataCareersResponse } from "../../../types/Admin/Response.types";
import {
  MainContainer,
  CareersContainer,
  SubTitle,
  ContactFormContainer,
  FormContainer,
  FormInput,
  CvInput,
} from "../../../styles/AdminCareersPage";
import CareersSubtitleBlock from "./CareersSubtitleBlock";
import * as Styled from "../../../styles/AdminCareersPage";
import { ArrowContainer } from "../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../utils/ButtonArrow";

const CareersContactForm = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<IDataCareersResponse>();
  const { CV, image, text, ...otheForm } = values.form;

  const onSubmit = () => {
    handleSubmit();
  };

  return (
    <MainContainer>
      <CareersContainer>
        <CareersSubtitleBlock />
        <SubTitle>Form</SubTitle>
        <ContactFormContainer>
          <FormContainer>
            {Object.entries(otheForm).map((el, idx) => (
              <FormInput
                key={idx}
                type="text"
                name={`form.${el[0]}`}
                value={el[1]}
                onChange={handleChange}
              />
            ))}
            <CvInput
              type="text"
              name={`form.CV.place`}
              value={CV.place}
              onChange={handleChange}
            />
          </FormContainer>
        </ContactFormContainer>
        <div style={{ marginTop: 30 }}>
          <Styled.TicketsButtonContainer>
            <Styled.TicketsButton onClick={onSubmit}>
              Save Changes
            </Styled.TicketsButton>
            <ArrowContainer>
              <ButtonArrow />
            </ArrowContainer>
          </Styled.TicketsButtonContainer>
        </div>
      </CareersContainer>
    </MainContainer>
  );
};

export default CareersContactForm;