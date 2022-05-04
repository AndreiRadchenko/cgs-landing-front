import React from "react";
import { useFormikContext } from "formik";

import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import useDeleteImageFunction from "../../../hooks/deleteImageFunction";
import useUploadImageFunction from "../../../hooks/uploadImageFunction";
import { IDataCareersResponse } from "../../../types/Admin/Response.types";

import * as Styled from "../../../styles/AdminPage";
import {
  MainContainer,
  CareersContainer,
  Title,
  SubTitle,
  TitleTextArea,
  ContactFormContainer,
  FormContainer,
  FormInput,
  CvContainer,
  CvInput,
  FormTextArea,
  ImageContainer,
} from "../../../styles/AdminCareersPage";

const CareersContactForm = () => {
  const { values, handleChange } = useFormikContext<IDataCareersResponse>();

  const uploadImageFunction = useUploadImageFunction(values.form);
  const deleteImageFunction = useDeleteImageFunction(values.form);

  return (
    <Styled.AdminPaddedBlock theme="dark">
      <MainContainer>
        <CareersContainer>
          <SubTitle>Subtitle</SubTitle>

          <TitleTextArea
            name="subtitle2"
            value={values.subtitle2}
            placeholder={values.subtitle2}
            onChange={handleChange}
          />

          <Title>Contact form</Title>

          <ContactFormContainer>
            <FormContainer>
              <FormInput
                type="text"
                name="form.name"
                value={values.form.name}
                onChange={handleChange}
              />

              <FormInput
                type="text"
                name="form.describe"
                value={values.form.describe}
                onChange={handleChange}
              />

              <FormInput
                type="text"
                name="form.email"
                value={values.form.email}
                onChange={handleChange}
              />

              <FormInput
                type="text"
                name="form.socialMediaLink"
                value={values.form.socialMediaLink}
                onChange={handleChange}
              />

              <FormInput
                type="text"
                name="form.linksToProjects"
                value={values.form.linksToProjects}
                onChange={handleChange}
              />

              <CvContainer>
                <CvInput
                  type="text"
                  name="form.CV.place"
                  value={values.form.CV.place}
                  onChange={handleChange}
                />

                <FormInput
                  type="text"
                  name="form.CV.isSupported"
                  value={values.form.CV.isSupported}
                  onChange={handleChange}
                />
              </CvContainer>

              <SubTitle>Button</SubTitle>

              <FormInput
                type="text"
                name="form.send"
                value="send"
                onChange={() => {
                  console.log("send");
                }}
              />

              <SubTitle>Text</SubTitle>

              <FormTextArea
                name="form.text"
                value={values.form.text}
                onChange={handleChange}
              />
            </FormContainer>
          </ContactFormContainer>
        </CareersContainer>

        <ImageContainer>
          <PhotoBlockDashed
            photo={values.form.image}
            deleteFlag={true}
            uploadFunction={(image) => uploadImageFunction(image)}
            deleteFunction={async () => (await deleteImageFunction)()}
          />
        </ImageContainer>
      </MainContainer>
    </Styled.AdminPaddedBlock>
  );
};

export default CareersContactForm;
