import React, { FC, useState } from "react";
import { useFormik, FormikValues } from "formik";
import * as emailjs from "emailjs-com";
import * as Styled from "./Form.styled";

import FormField from "./FormField/index";
import { CareerFormValidation } from "../../../validations/CareerFormValidator";
import { fieldData } from "../../../mock/VacancyFieldData";
import animateCV from "../../../../public/lotties/CVButton.json";
import BaseButton from "../../BaseButton/BaseButton";
import ButtonTextWrapper from "../../ButtonText/ButtonTextWrapper";
import { IFormBlock } from "../../../types/Admin/Response.types";

interface IFormProps {
  data?: IFormBlock;
}

const Form: FC<IFormProps> = ({ data }) => {
  const [isCV, setIsCV] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);

  const { CV, image, text, ...fieldContent } = { ...data };

  const formik = useFormik({
    initialValues: fieldData,
    onSubmit: (values: FormikValues, { resetForm }) => {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_HOME_EMAIL_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_VACANCIES_EMAIL_TEMPLATE_ID || "",
          values,
          process.env.NEXT_PUBLIC_HOME_EMAIL_USER_ID
        )
        .then(() => {
          setSent(true);
          resetForm();
        });
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
      setIsCV(!!name);
    }, 10000);
  };

  const fileEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    {
      name ? animateCv(name) : setIsCV(!!name);
    }
    animateCv(name);
    return handleChange(e);
  };

  return (
    <Styled.FormProvider value={formik}>
      <Styled.Form onSubmit={formik.handleSubmit}>
        {Object.entries(fieldContent).map((el) => (
          <FormField
            key={el[0]}
            name={el[0]}
            label={el[1]}
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
              <Styled.FileText>{CV?.place}</Styled.FileText>
            </Styled.InputFileLabel>
          </Styled.FileInputWrapper>
          {animate && (
            <Styled.FileContainer>
              <Styled.LottieButton animationData={animateCV} />
            </Styled.FileContainer>
          )}

          <Styled.FileLoad>
            {isCV ? "file is uploaded" : CV?.isSupported}
          </Styled.FileLoad>
        </Styled.FileContainer>
        <Styled.SubmitButton>
          {sent && (
            <Styled.SentMessage>
              Thank you for your message. It has been sent.
            </Styled.SentMessage>
          )}
          <BaseButton
            src="/careersSendBg.png"
            width="22rem"
            height="4rem"
            className="big-btn"
            type="submit"
          >
            <ButtonTextWrapper fontSize="1.4em">send</ButtonTextWrapper>
          </BaseButton>
        </Styled.SubmitButton>
        <Styled.BottomText>{text}</Styled.BottomText>
      </Styled.Form>
    </Styled.FormProvider>
  );
};

export default Form;
