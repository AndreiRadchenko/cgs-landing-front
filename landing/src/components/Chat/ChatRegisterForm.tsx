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
    <Styled.MessageFormRegister
      onSubmit={formik.handleSubmit}
      autoComplete="off"
    >
      <svg
        style={{ cursor: "pointer" }}
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.348 7.57293C19.3422 7.57969 19.3363 7.58628 19.3302 7.59272L8.56961 18.8771C7.6491 19.8424 6.55734 20.347 5.3977 20.3471C5.30961 20.3471 5.22117 20.3442 5.13234 20.3383C4.02452 20.2654 2.94975 19.7381 2.10605 18.8533C1.26235 17.9686 0.759484 16.8415 0.689991 15.6797C0.611063 14.3602 1.09288 13.1138 2.08331 12.0751L12.8086 0.827857C12.9883 0.639392 13.2797 0.639432 13.4595 0.827857C13.6392 1.01636 13.6392 1.32194 13.4595 1.51041L2.73417 12.7577C0.968731 14.6091 1.50842 16.8615 2.75692 18.1708C4.00546 19.4801 6.1533 20.046 7.91875 18.1946L18.6699 6.9201C19.8507 5.52383 19.4513 3.9251 18.5292 2.95828C17.6073 1.99142 16.0827 1.57247 14.7513 2.81084L7.88212 10.0144C6.97484 10.9658 7.23486 12.0903 7.89501 12.7826C8.55519 13.4749 9.62747 13.7475 10.5348 12.7961L16.4796 6.56183C16.6593 6.37333 16.9507 6.37333 17.1304 6.56183C17.3102 6.75034 17.3102 7.05588 17.1304 7.24439L11.1856 13.4786C9.89604 14.831 8.22671 14.4955 7.24418 13.4651C6.26165 12.4348 5.94176 10.6842 7.23126 9.33186L14.1099 2.11839C14.116 2.112 14.1223 2.10577 14.1288 2.09973C14.9245 1.3544 15.8605 1.00719 16.8352 1.09599C17.6966 1.17434 18.5294 1.5933 19.1801 2.27573C19.8308 2.95812 20.2303 3.83143 20.305 4.73474C20.3897 5.75706 20.0587 6.73851 19.348 7.57293Z"
          fill="#8F8E93"
        />
      </svg>
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
      <Styled.SubmitIconButton type="submit">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66536 11.3327L6.66536 3.21935L10.392 6.94602L11.332 5.99935L5.9987 0.666015L0.665365 5.99935L1.60536 6.93935L5.33203 3.21935L5.33203 11.3327L6.66536 11.3327Z"
            fill="black"
          />
          <path
            d="M6.66536 11.3327L6.66536 3.21935L10.392 6.94602L11.332 5.99935L5.9987 0.666015L0.665365 5.99935L1.60536 6.93935L5.33203 3.21935L5.33203 11.3327L6.66536 11.3327Z"
            fill="black"
          />
        </svg>
      </Styled.SubmitIconButton>
    </Styled.MessageFormRegister>
  );
};

export default ChatRegisterForm;
