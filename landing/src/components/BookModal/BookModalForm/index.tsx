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
import { FormFieldDetails } from "./FormFieldDetails/FormFiledDetails";

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

function split(text: string) {
  const splited = text?.split("|");

  return splited.join("").toString();
}

const BookForm = ({ onClose, isOpen }: IFormProps) => {
  const [service, setService] = useState<string>("");
  const [serviceIsOpen, setServiceIsOpen] = useState<boolean>(false);
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

  const { data: ServiceData } = useQuery([queryKeys.getAllServices], () =>
    adminServices.getAllServices()
  );

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
      console.log("on submit");
      // if (!values.email || !values.service) return;
      if (!values.email) return;
      sendTeamEmail.mutate({
        name: values.name,
        email: values.email,
        phone: value,
        country: country,
        // service: values.service,
        // details: values.details,
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
      setService("");
      resetForm();
      setCountry("");
      setValue("");
    },
  });

  useEffect(() => {
    if (!isOpen) {
      formik.setErrors({});
      setService("");
      setBtnState({
        isDisabled: true,
        isClicked: false,
        link: "https://calendly.com/d/y5z-x7b-5ys/30min",
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

  // useEffect(() => {
  //   setBtnState((old) => {
  //     const ind =
  //       navigationRoutesNamesNew[1].tags &&
  //       navigationRoutesNamesNew[1].tags.findIndex((serv) => serv === service);
  //     if (
  //       ServiceData &&
  //       navigationRoutesNamesNew[1].tags &&
  //       typeof ind === "number" &&
  //       ind !== -1
  //     ) {
  //       const tempLink = ServiceData[ind].headerBlock.buttonLink;
  //       if (tempLink)
  //         return {
  //           ...old,
  //           link: tempLink,
  //         };
  //     }
  //     return old;
  //   });
  // }, [service, ServiceData]);

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
        {/* <Styled.ServiceSelect>
          <ServiceDropdown
            btnIsClicked={btnState.isClicked}
            serviceIsOpen={serviceIsOpen}
            setServiceIsOpen={setServiceIsOpen}
            setService={setService}
            dropdownName={split(service)}
          />
        </Styled.ServiceSelect> */}
        {/* <FormFieldDetails
          btnIsClicked={btnState.isClicked}
          name={"details"}
          label={"Any details"}
          placeholder={"Your idea description, requirements, etc."}
          maxLength={1000}
        /> */}
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
