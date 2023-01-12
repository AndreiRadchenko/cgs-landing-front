import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Styled from "../../../styles/BookModalForm/Form.styled";
import FormField from "./FormField/index";
import { useMutation, useQuery } from "@tanstack/react-query";
import ServiceDropdown from "./ServiceDropdown";
import * as Styles from "../../../styles/HomePage/General.styled";
import BookACallButton from "../../BookACallButton";
import { queryKeys } from "../../../consts/queryKeys";
import { useOnScreen } from "../../../hooks/useOnScreen";
import { IBookModalData } from "../../../types/Mail.types";
import { adminBookService } from "../../../services/adminBookServiceModal";
import { adminServices } from "../../../services/services/commonServices";
import { BookModalValidation } from "../../../validations/BookModalValidation";

interface FormState {
  name: string;
  email: string;
  service: string;
}

function split(text: string) {
  const splited = text?.split("|");

  return splited.join("").toString();
}

const BookForm = () => {
  const [enable, setEnable] = useState(false);
  const [buttonState, setButtonState] = useState({
    disabled: true,
    triedSubmit: false,
  });
  const [service, setService] = useState("");

  const ref = useRef<HTMLInputElement>(null);
  const elRef = useRef<HTMLDivElement>(null);

  const { data: ServiceData } = useQuery([queryKeys.getAllServices], () =>
    adminServices.getAllServices()
  );

  const companyServices = ServiceData?.map((service) =>
    service.headerBlock.title.toUpperCase()
  );

  const [buttonClassName, setButtonClassName] = useState<string>("main");

  const fieldContent = {
    name: "Your name",
    email: "Email",
  };

  const validationSchema = BookModalValidation;

  const formik = useFormik<FormState>({
    initialValues: {
      name: "",
      email: "",
      service: "",
    },
    validationSchema,
    onSubmit(values, { resetForm }) {
      if (!values.email) return;
      if (!values.service) return;
      if (buttonState.disabled) {
        return setButtonState({ ...buttonState, triedSubmit: true });
      } else {
        mutate({
          name: values.name,
          email: values.email,
          service: values.service.replaceAll("|", ""),
        });
      }

      resetForm();
    },
  });

  const { mutate } = useMutation((data: IBookModalData) =>
    adminBookService.mailForm(data)
  );

  const checkCancel = () => {
    if (!ref.current) return;

    if (!ref.current.value.length) {
      return;
    } else {
      document.body.onfocus = null;
    }
  };

  useEffect(() => {
    document.body.onfocus = () => setTimeout(checkCancel, 100);
  }, []);

  useEffect(() => {
    const filledFields = Object.keys(formik.values).reduce((prev, curr) => {
      const element = formik.values[curr as keyof typeof formik.values];

      if (!element) return prev;

      return prev + 1;
    }, 0);

    filledFields < 3 && !buttonState.disabled
      ? setButtonState({ ...buttonState, disabled: true })
      : filledFields >= 3
      ? setButtonState({ ...buttonState, disabled: false })
      : null;
  }, [formik.values]);

  useEffect(() => {
    formik.setFieldValue("service", service);
    setEnable(false);
  }, [service]);

  const isOnScreen = useOnScreen(elRef, true);

  useEffect(() => {
    if (isOnScreen) {
      setButtonClassName("scrolled");
      setTimeout(() => {
        setButtonClassName("scrolled removeBg");
      }, 1000);
    }
  }, [isOnScreen]);

  const buttonLink = ServiceData?.find(
    (s) => s.headerBlock.title.toUpperCase() === service
  )?.headerBlock.buttonLink;

  return (
    <Styled.FormProvider value={formik}>
      <Styled.Shadow className={enable ? "inline-block" : "enabled"} />
      <Styled.Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        {Object.entries(fieldContent).map(([key, label]) => (
          <FormField
            name={key}
            key={key}
            label={label}
            fieldError={formik.errors[key]}
          />
        ))}
        <Styled.ServiceSelect
          onClick={() => setEnable(!enable)}
          className={enable ? "1" : "enabled"}
        >
          <ServiceDropdown
            className="careers"
            filter={service}
            setFilter={setService}
            services={companyServices}
            dropdownName={service ? split(service) : "Choose a service"}
            setEnable={setEnable}
          />
        </Styled.ServiceSelect>
        <Styled.FormSentContainer>
          <Styles.ButtonWrapper ref={elRef}>
            <BookACallButton
              buttonLink={buttonLink || "https://cgs.io"}
              withCalendly
              buttonClassName={buttonClassName}
              isDisabled={
                buttonState.disabled ||
                formik.errors.email ||
                formik.errors.name
              }
            />
          </Styles.ButtonWrapper>
          <Styled.FormSentFillText
            className={
              buttonState.disabled && buttonState.triedSubmit
                ? "none"
                : "toDisplay"
            }
          >
            &lt; Fill in all the fields &gt;
          </Styled.FormSentFillText>
        </Styled.FormSentContainer>
      </Styled.Form>
    </Styled.FormProvider>
  );
};

export default BookForm;
