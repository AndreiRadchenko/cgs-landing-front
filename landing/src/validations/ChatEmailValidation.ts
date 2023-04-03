import * as yup from "yup";
import { IChatEmailForm } from "../components/Chat/ChatRegisterForm";

export const ChatEmailSchema: yup.SchemaOf<IChatEmailForm> = yup.object({
  email: yup
    .string()
    .email("email has to fit email@domain.com")
    .required("email is required"),
});
