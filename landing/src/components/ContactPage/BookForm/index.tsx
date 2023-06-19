import React, { useState } from "react";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";

import FormField from "./FormField";
import BookACallButton from "../../BookACallButton";

import * as Styled from "../../../styles/BookModalForm/Form.styled";
import * as CSS from "./BookForm.styled";
import { IBookModalData } from "../../../types/Mail.types";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";
import { adminBookService } from "../../../services/adminBookServiceModal";
import { BookModalValidation } from "../../../validations/BookModalValidation";

export interface IFormState {
  name: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  details: string;
}

export type IFormProps = Pick<IContactPageData, "header">;

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

const BookForm = ({ header }: IFormProps) => {
  const [calendlyIsOpen, setCalendlyIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [btnState, setBtnState] = useState({
    isDisabled: false,
    isClicked: false,
    link: "https://calendly.com/d/y5h-6m9-mnr/get-to-know-meeting-with-cgs-team",
  });

  const { placeholders, button } = header;

  const fieldContent = {
    name: placeholders.name,
    email: placeholders.email,
    phone: placeholders.service,
  };

  const sendTeamEmail = useMutation((data: IBookModalData) =>
    adminBookService.mailForm(data)
  );

  const formik = useFormik<IFormState>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      service: "",
      details: "",
    },
    validationSchema: BookModalValidation,
    validateOnBlur: true,
    onSubmit(values, { resetForm, setErrors }) {
      if (!values.email) return;
      sendTeamEmail.mutate({
        name: values.name,
        email: values.email,
        phone: value,
        country: country,
        service: "Mobile Development",
        details: "",
      });

      setCalendlyIsOpen(true);

      setName(values.name);
      setEmail(values.email);
      resetForm();
    },
  });

  const checkIfButtonIsDisabled = async () => {
    if (btnState.isDisabled) return;
    await setBtnState((old) => {
      return {
        ...old,
        isClicked: true,
        isDisabled: true,
      };
    });

    formik.validateForm();
  };

  const handleClose = async () => {
    setName("");
    setEmail("");
    await setBtnState((old) => {
      return {
        ...old,
        isClicked: false,
        isDisabled: false,
      };
    });
  };

  return (
    <Styled.FormProvider value={formik}>
      <CSS.FormMobileAlign>
        <CSS.Form
          onSubmit={formik.handleSubmit}
          encType="multipart/form-data"
          id="contact_page_form"
        >
          {Object.entries(fieldContent).map(([key, label], idx) => (
            <FormField
              value={value}
              setValue={setValue}
              setCountry={setCountry}
              btnIsClicked={btnState.isClicked}
              name={key as keyof IFormState}
              key={key}
              label={label}
              idx={idx}
            />
          ))}
          <CSS.FormSentContainer>
            <CSS.ButtonWrapper onClick={checkIfButtonIsDisabled}>
              <BookACallButton
                name={name}
                email={email}
                buttonText={button.name}
                buttonLink={button.calendly}
                buttonClassName={"calendly"}
                handleClose={handleClose}
                calendlyIsOpen={calendlyIsOpen}
                setCalendlyIsOpen={setCalendlyIsOpen}
              />
            </CSS.ButtonWrapper>
          </CSS.FormSentContainer>
        </CSS.Form>
      </CSS.FormMobileAlign>
    </Styled.FormProvider>
  );
};

export default BookForm;
