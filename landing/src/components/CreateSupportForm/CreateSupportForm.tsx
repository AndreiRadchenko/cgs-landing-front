import React from "react";
import { useFormik } from "formik";
import FormInput from "../FormInput/FormInput";
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

const CreateSupportForm = ({ setButtonIsHovered }: LetsCodeFormPropTypes) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.ContactFormBlock;
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
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit: (values) => {
      console.log(values);
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
          <ButtonSubmitForm>
            <ButtonTextWrapper fontSize={"1.4em"}>send</ButtonTextWrapper>
          </ButtonSubmitForm>
        </StyledThisComp.ButtonRow>
      </StyledThisComp.ContentWrapper>
    </StyledThisComp.Container>
  );
};

export default CreateSupportForm;
