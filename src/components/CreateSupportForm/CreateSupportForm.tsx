import React from "react";
import { useFormik } from "formik";
import FormInput from "../FormInput/FormInput";
import * as StyledThisComp from "./CreateSupportForm.styled";
import { LestCodeValidation } from "../../validations/LetsCodeValidator";
import ButtonSubmitForm from "../../utils/Buttons/ButtonSubmitForm";
import ButtonTextWrapper from "../ButtonText/ButtonTextWrapper";
import FormTextArea from "../FormInput/FormTextArea";

const CreateSupportForm = () => {
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: LestCodeValidation(),
    onSubmit: (values) => {},
  });

  return (
    <StyledThisComp.Container onSubmit={handleSubmit}>
      <StyledThisComp.ContentWrapper>
        <StyledThisComp.Title>Let`s code!</StyledThisComp.Title>

        <FormInput
          value={values.name}
          handleChange={handleChange}
          name={"name"}
          placeholder={"Name"}
          errors={errors}
        />
        <FormInput
          value={values.email}
          handleChange={handleChange}
          name={"email"}
          placeholder={"Email"}
          errors={errors}
        />

        <FormTextArea
          value={values.message}
          handleChange={handleChange}
          name={"message"}
          placeholder={"Your message"}
          errors={errors}
        />

        <StyledThisComp.ButtonRow>
          <ButtonSubmitForm>
            <ButtonTextWrapper fontSize={"1.4em"}>send</ButtonTextWrapper>
          </ButtonSubmitForm>
        </StyledThisComp.ButtonRow>
      </StyledThisComp.ContentWrapper>
    </StyledThisComp.Container>
  );
};

export default CreateSupportForm;
