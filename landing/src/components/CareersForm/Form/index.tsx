import React, { FC, useState } from "react";
import { useFormik, FormikValues } from "formik";
import * as Styled from "./Form.styled";

import FormField from "./FormField/index";
import { CareerFormValidation } from "../../../validations/CareerFormValidator";
import { fieldData } from "../../../mock/VacancyFieldData";
import animateCV from "../../../../public/lotties/CVButton.json";
import BaseButton from "../../BaseButton/BaseButton";
import ButtonTextWrapper from "../../ButtonText/ButtonTextWrapper";
import { IFormBlock } from "../../../types/Admin/Response.types";
import ModalSentEmail from "../../Modal/ModalSentEmail";
import { useMutation } from "react-query";
import { adminCareersService } from "../../../services/adminCareersPage";
import { IVacancyMail } from "../../../types/Mail.types";

interface IFormProps {
  vacancy: string;
  data?: IFormBlock;
}

const Form: FC<IFormProps> = ({ data, vacancy }) => {
  const [isCV, setIsCV] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: fieldData,
    onSubmit: (values: FormikValues, { resetForm }) => {
      if (vacancy) {
        const { file } = values;

        const formData = new FormData();

        formData.append("file", file);

        CVmutate(formData);
        setIsCV(false);
        resetForm();
      }
    },
    validationSchema: CareerFormValidation(),
  });

  const { mutate } = useMutation(
    (data: IVacancyMail) => adminCareersService.mailForm(data),
    {
      onSuccess: () => {
        setSent(true);
      },
      onError: () => {
        setSent(false);
      },
    }
  );

  const { mutate: CVmutate } = useMutation(
    (image: FormData) => adminCareersService.uploadCV(image),
    {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onSuccess: (data: any) => {
        const { email, name, telegram } = formik.values;
        const filename = data.filename;
        const mailData: IVacancyMail = {
          vacancy,
          describeYourself: formik.values.describe,
          email,
          projectsLink: formik.values.linksToProjects,
          name,
          mediaLink: formik.values.socialMediaLink,
          telegram,
          filename,
        };
        mutate(mailData);
      },
      onError: (data) => {
        console.log(data);
      },
    }
  );

  const { CV, image, text, ...fieldContent } = { ...data };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) formik.setFieldValue("file", event.target.files[0]);
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

    name ? animateCv(name) : setIsCV(!!name);

    animateCv(name);
    return handleChange(e);
  };

  const closeHandler = () => {
    setSent(false);
  };

  return (
    <Styled.FormProvider value={formik}>
      <Styled.Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        {Object.entries(fieldContent).map((el) => (
          <FormField
            key={el[0]}
            name={el[0]}
            label={el[1]}
            handleChange={formik.handleChange}
          />
        ))}

        <Styled.FileContainer>
          <Styled.FileInputWrapper active={animate}>
            <Styled.InputFile
              name="file"
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
          {sent && <ModalSentEmail isOpen={sent} closeHandler={closeHandler} />}
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
