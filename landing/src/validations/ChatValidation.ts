import * as yup from "yup";
import { IChatEmailForm } from "../components/Chat/ChatRegisterForm";
import { IChatNameForm } from "../components/Chat/ChatNameForm";

export const ChatEmailSchema: yup.SchemaOf<IChatEmailForm> = yup.object({
  email: yup
    .string()
    .email("Email has to fit email@domain.com")
    .required("Email is required"),
});

export const ChatNameSchema: yup.SchemaOf<IChatNameForm> = yup.object({
  name: yup.string().max(70).required("Enter your name please"),
});
