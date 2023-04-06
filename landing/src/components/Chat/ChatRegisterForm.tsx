import React from "react";
import { useFormik } from "formik";
import { ChatEmailSchema } from "../../validations/ChatEmailValidation";
import { useCreateUserChat } from "../../hooks/useCreateUserChat";

import * as Styled from "../../styles/Chat/ChatInputForm.styled";
import { IChatUserInfo } from "../../types/SupportChat.types";

export interface IChatEmailForm {
  email: string;
}

interface IChatRegisterFormProps {
  isChatOpen: boolean;
  setChatUserInfo: React.Dispatch<React.SetStateAction<IChatUserInfo | null>>;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  setSentEmailTime: React.Dispatch<React.SetStateAction<string>>;
  setIsGreetingMessageShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatRegisterForm = ({
  isChatOpen,
  setUserEmail,
  setSentEmailTime,
  setChatUserInfo,
  setIsGreetingMessageShow,
}: IChatRegisterFormProps) => {
  const { handleSubmit } = useCreateUserChat({
    setUserEmail,
    setSentEmailTime,
    setChatUserInfo,
    setIsGreetingMessageShow,
  });
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

  return (
    <Styled.MessageForm onSubmit={formik.handleSubmit} autoComplete="off">
      <div>
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
      </div>
      <Styled.SubmitIconButton type="submit">Send</Styled.SubmitIconButton>
    </Styled.MessageForm>
  );
};

export default ChatRegisterForm;
