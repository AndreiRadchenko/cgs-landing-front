import React, { useEffect, useState, MouseEvent } from "react";
import { useFormik } from "formik";
import * as Styled from "../../../styles/BookModalForm/Form.styled";
import FormField from "./FormField/index";
import { useMutation, useQuery } from "@tanstack/react-query";
import ServiceDropdown from "./ServiceDropdown";
import * as Styles from "../../../styles/HomePage/General.styled";
import BookACallButton from "../../BookACallButton";
import { queryKeys } from "../../../consts/queryKeys";
import { IBookModalData } from "../../../types/Mail.types";
import { adminBookService } from "../../../services/adminBookServiceModal";
import { adminServices } from "../../../services/services/commonServices";
import { BookModalValidation } from "../../../validations/BookModalValidation";
import { navigationRoutesNamesNew } from "../../../utils/variables";

export interface IFormState {
  name: string;
  email: string;
  service: string;
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

function split(text: string) {
  const splited = text?.split("|");

  return splited.join("").toString();
}

const BookForm = ({ onClose, isOpen }: IFormProps) => {
  const [service, setService] = useState<string>("");
  const [serviceIsOpen, setServiceIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [btnState, setBtnState] = useState({
    isDisabled: true,
    isClicked: false,
    link: "",
  });

  const { data: ServiceData } = useQuery([queryKeys.getAllServices], () =>
    adminServices.getAllServices()
  );

  const fieldContent = {
    name: "Your name",
    email: "Email",
  };

  const validationSchema = BookModalValidation;

  const formik = useFormik<IFormState>({
    initialValues: {
      name: "",
      email: "",
      service: "",
    },
    validateOnBlur: true,
    validationSchema,
    onSubmit(values, { resetForm, setErrors }) {
      if (!values.email || !values.service) return;
      mutate({
        name: values.name,
        email: values.email,
        service: values.service,
      });
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
      setService("");
      resetForm();
    },
  });

  const { mutate } = useMutation((data: IBookModalData) =>
    adminBookService.mailForm(data)
  );

  useEffect(() => {
    if (!isOpen) {
      formik.setErrors({});
      setService("");
      setBtnState({
        isDisabled: true,
        isClicked: false,
        link: "",
      });
      setServiceIsOpen(false);
      formik.resetForm();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setBtnState((old) => {
        return { ...old, isDisabled: Object.keys(formik.errors).length !== 0 };
      });
    }
  }, [formik.errors]);

  useEffect(() => {
    setBtnState((old) => {
      const ind =
        navigationRoutesNamesNew[1].tags &&
        navigationRoutesNamesNew[1].tags.findIndex((serv) => serv === service);
      if (
        ServiceData &&
        navigationRoutesNamesNew[1].tags &&
        typeof ind === "number" &&
        ind !== -1
      ) {
        const tempLink = ServiceData[ind].headerBlock.buttonLink;
        if (tempLink)
          return {
            ...old,
            link: tempLink,
          };
      }
      return old;
    });
  }, [service, ServiceData]);

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
            btnIsClicked={btnState.isClicked}
            name={key as keyof IFormState}
            key={key}
            label={label}
          />
        ))}
        <Styled.ServiceSelect>
          <ServiceDropdown
            btnIsClicked={btnState.isClicked}
            serviceIsOpen={serviceIsOpen}
            setServiceIsOpen={setServiceIsOpen}
            setService={setService}
            dropdownName={service ? split(service) : "Choose a service"}
          />
        </Styled.ServiceSelect>
        <Styled.FormSentContainer>
          <Styles.ButtonWrapper onClick={checkIfButtonIsDisabled}>
            <BookACallButton
              name={name}
              email={email}
              buttonLink={btnState.link}
              buttonClassName={"calendly"}
              isDisabled={btnState.isDisabled}
              handleClose={handleClose}
            />
          </Styles.ButtonWrapper>
        </Styled.FormSentContainer>
      </Styled.Form>
    </Styled.FormProvider>
  );
};

export default BookForm;
