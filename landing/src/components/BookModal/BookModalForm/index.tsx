import React, { useEffect, useState, MouseEvent, useCallback } from "react";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";

import FormField from "./FormField/index";
import BookACallButton from "../../BookACallButton";

import * as Styled from "../../../styles/BookModalForm/Form.styled";
import * as Styles from "../../../styles/HomePage/General.styled";
import { IBookModalData } from "../../../types/Mail.types";
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

interface IFormProps {
  onClose: (e?: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  isOpen: boolean;
}

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

const BookForm = ({ onClose, isOpen }: IFormProps) => {
  const [calendlyIsOpen, setCalendlyIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [btnState, setBtnState] = useState({
    isDisabled: true,
    isClicked: false,
    link: "https://calendly.com/d/y5z-x7b-5ys/30min",
  });

  const fieldContent = {
    name: "Your name",
    email: "Email",
    phone: "Phone number",
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
      values.details = values.details.replace(/^\s*$/, "");
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
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "launch_our_cooperation_form",
          formType: "Contact us",
        });
      }
      setName(values.name);
      setEmail(values.email);
      setErrors({});
      resetForm();
      setCountry("");
      setValue("");
    },
  });

  useEffect(() => {
    if (isOpen) {
      setBtnState((old) => {
        return { ...old, isDisabled: Object.keys(formik.errors).length !== 0 };
      });
    }
  }, [formik.errors, isOpen]);

  const checkIfButtonIsDisabled = () => {
    setBtnState((old) => {
      return {
        ...old,
        isClicked: true,
      };
    });

    formik.validateForm();
  };

  const handleClose = () => {
    onClose();
    setName("");
    setEmail("");
  };

  return (
    <Styled.FormProvider value={formik}>
      <Styled.Shadow className={isOpen ? "inline-block" : "enabled"} />
      <Styled.Form
        onSubmit={formik.handleSubmit}
        encType="multipart/form-data"
        id="launch_our_cooperation_form"
      >
        {Object.entries(fieldContent).map(([key, label]) => (
          <FormField
            value={value}
            setValue={setValue}
            setCountry={setCountry}
            btnIsClicked={btnState.isClicked}
            name={key as keyof IFormState}
            key={key}
            label={label}
          />
        ))}
        <Styled.FormSentContainer>
          <Styles.ButtonWrapper onClick={checkIfButtonIsDisabled}>
            <BookACallButton
              name={name}
              email={email}
              buttonLink={btnState.link}
              buttonClassName={"calendly"}
              handleClose={handleClose}
              calendlyIsOpen={calendlyIsOpen}
              setCalendlyIsOpen={setCalendlyIsOpen}
            />
          </Styles.ButtonWrapper>
        </Styled.FormSentContainer>
      </Styled.Form>
    </Styled.FormProvider>
  );
};

export default BookForm;
