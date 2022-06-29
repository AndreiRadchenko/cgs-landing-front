import React, { useState } from "react";
import { useFormik } from "formik";
import FormInput from "../FormInput/FormInput";
import * as emailjs from "emailjs-com";
import * as StyledThisComp from "./CreateSupportForm.styled";
import { LestCodeValidation } from "../../validations/LetsCodeValidator";
import { LetsCodeFormPropTypes } from "../../types/Button.types";
import ButtonSubmitForm from "../../utils/Buttons/ButtonSubmitForm";
import ButtonTextWrapper from "../ButtonText/ButtonTextWrapper";
import FormTextArea from "../FormInput/FormTextArea";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import {
  IContactFormBlock,
  IDataResponse,
} from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import ModalSentEmail from "../Modal/ModalSentEmail";

interface IEmailBody {
  [name: string]: string;
  email: string;
  message: string;
}

const CreateSupportForm = ({ setButtonIsHovered }: LetsCodeFormPropTypes) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.ContactFormBlock;
  const [sent, setSent] = useState<boolean>(false);
  const {
    subtitle = "Let's code!",
    name = "Name",
    email = "Email",
    message = "Your message",
  } = { ...data };
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: LestCodeValidation(),
    onSubmit: (values: IEmailBody, { resetForm }) => {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_HOME_EMAIL_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_HOME_EMAIL_TEMPLATE_ID || "",
          values,
          process.env.NEXT_PUBLIC_HOME_EMAIL_USER_ID
        )
        .then(() => {
          setSent(true);
          resetForm();
        });
    },
  });

  const handleHover = () => {
    setButtonIsHovered(true);
  };

  const handleLeave = () => {
    setButtonIsHovered(false);
  };

  const getKeyByValue = (
    object: IContactFormBlock | undefined,
    value: string
  ) => {
    return (
      (object && Object.keys(object).find((key) => object[key] === value)) || ""
    );
  };
  const closeHandler = () => {
    setSent(false);
  };

  return (
    <StyledThisComp.Container onSubmit={handleSubmit}>
      <StyledThisComp.ContentWrapper>
        <StyledThisComp.Title>
          <SplitBrackets text={subtitle} />
        </StyledThisComp.Title>

        <FormInput
          value={values.name}
          handleChange={handleChange}
          name={getKeyByValue(data, name)}
          placeholder={name}
          errors={errors["name"]}
        />
        <FormInput
          value={values.email}
          handleChange={handleChange}
          name={getKeyByValue(data, email)}
          placeholder={email}
          errors={errors["email"]}
        />

        <FormTextArea
          value={values.message}
          handleChange={handleChange}
          name={getKeyByValue(data, message)}
          placeholder={message}
          errors={errors["message"]}
        />

        <StyledThisComp.ButtonRow
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          {sent && <ModalSentEmail isOpen={sent} closeHandler={closeHandler} />}
          <ButtonSubmitForm>
            <ButtonTextWrapper fontSize={"1.4em"}>send</ButtonTextWrapper>
          </ButtonSubmitForm>
        </StyledThisComp.ButtonRow>
      </StyledThisComp.ContentWrapper>
    </StyledThisComp.Container>
  );
};

export default CreateSupportForm;
