import React, { FC, useState, useEffect } from "react";
import { useFormik, FormikValues } from "formik";
import * as Styled from "./Form.styled";
import FormField from "./FormField/index";
import { CareerFormValidation } from "../../../validations/CareerFormValidator";
import { fieldData, fieldContent } from "../../../mock/VacancyFieldData";
import animateCV from "../../../../public/lotties/CVButton.json";

const Form: FC = () => {
  const [CV, setCV] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: fieldData,
    onSubmit: (values: FormikValues) => {
      console.log(values);
    },
    validationSchema: CareerFormValidation(),
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(event.target.name, event.target.value);
  };

  const animateCv = (name: string) => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      setCV(!!name);
    }, 10000);
  };

  const fileEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    {
      name ? animateCv(name) : setCV(!!name);
    }
    animateCv(name);
    return handleChange(e);
  };

  return (
    <Styled.FormProvider value={formik}>
      <Styled.Form onSubmit={formik.handleSubmit}>
        {fieldContent.map(({ name, label }) => (
          <FormField
            key={name}
            name={name}
            label={label}
            handleChange={handleChange}
          />
        ))}
        <Styled.FileContainer>
          <Styled.FileInputWrapper active={animate}>
            <Styled.InputFile
              name="CV-file"
              type="file"
              className="CV-file"
              onChange={fileEdit}
              id="CV-file"
              accept=".png,.jpeg,.pdf,.word,.docx"
            />
            <Styled.InputFileLabel htmlFor="CV-file">
              <Styled.FileButton>
                <Styled.FileImg src="/clip-file.png" />
              </Styled.FileButton>
              <Styled.FileText>a special place for your CV :)</Styled.FileText>
            </Styled.InputFileLabel>
          </Styled.FileInputWrapper>
          {animate && (
            <Styled.FileContainer>
              <Styled.LottieButton animationData={animateCV} />
            </Styled.FileContainer>
          )}

          <Styled.FileLoad>
            {CV ? "file is uploaded" : "file is not uploaded"}
          </Styled.FileLoad>
        </Styled.FileContainer>
        <Styled.SubmitButton type="submit" />
        <Styled.BottomText>
          It could be that we won’t answer you. That means our match was
          imperfect today. Keep your head up!
        </Styled.BottomText>
      </Styled.Form>
    </Styled.FormProvider>
  );
};

export default Form;
