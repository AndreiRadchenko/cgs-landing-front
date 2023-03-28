import React from "react";
import { useFormik } from "formik";
import { ChatEmailSchema } from "../../validations/ChatEmailValidation";
import * as Styled from "../../styles/Chat/ChatInputForm.styled";
import setMessageTime from "../../utils/setMessageTime";

export interface IChatEmailForm {
  email: string;
}

interface IChatRegisterFormProps {
  isChatOpen: boolean;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  setSentEmailTime: React.Dispatch<React.SetStateAction<string>>;
}

const ChatRegisterForm = ({
  isChatOpen,
  setUserEmail,
  setSentEmailTime,
}: IChatRegisterFormProps) => {
  const formik = useFormik<IChatEmailForm>({
    initialValues: {
      email: "",
    },
    validationSchema: ChatEmailSchema,
    onSubmit: (values, actions) => {
      handleSubmit(values);
      actions.resetForm();
    },
  });

  const handleSubmit = (values: IChatEmailForm) => {
    setUserEmail(values.email);
    setSentEmailTime(setMessageTime());
  };

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <Styled.InputField
        type="emai"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="Input your email"
        autoFocus={!!isChatOpen}
      />
      <Styled.InputEmailError>
        {formik.touched.email && formik.errors.email}
      </Styled.InputEmailError>
    </form>
  );
};

export default ChatRegisterForm;
