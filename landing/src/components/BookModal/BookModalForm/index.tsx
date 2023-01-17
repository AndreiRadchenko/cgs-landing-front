import React, { useEffect, useState, MouseEvent } from "react";
import { useFormik, FormikErrors } from "formik";
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

interface FormState {
  name: string;
  email: string;
  service: string;
}

interface IFormProps {
  onClose: (e?: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  isOpen: boolean;
}

function split(text: string) {
  const splited = text?.split("|");

  return splited.join("").toString();
}

const BookForm = ({ onClose, isOpen }: IFormProps) => {
  const [enable, setEnable] = useState(false);

  const [service, setService] = useState("");
  const [btnState, setBtnState] = useState({
    isDisabled: true,
    isClicked: false,
    link: "",
  });

  const { data: ServiceData } = useQuery([queryKeys.getAllServices], () =>
    adminServices.getAllServices()
  );

  const companyServices = ServiceData?.map((service) =>
    service.headerBlock.title.toUpperCase()
  );

  const buttonClassName = "scrolled removeBg";

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
    onSubmit(values, { resetForm, setErrors }) {
      if (!values.email || !values.service) return;
      mutate({
        name: values.name,
        email: values.email,
        service: values.service,
      });

      setErrors({});
      setService("");
      resetForm();
    },
  });

  const { mutate } = useMutation((data: IBookModalData) =>
    adminBookService.mailForm(data)
  );

  useEffect(() => {
    formik.setErrors({});
    setService("");
    setBtnState({
      isDisabled: true,
      isClicked: false,
      link: "",
    });
    formik.resetForm();
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
      const tempLink = ServiceData?.find(
        (s) => s.headerBlock.title.toUpperCase() === service
      )?.headerBlock.buttonLink;
      if (tempLink)
        return {
          ...old,
          link: tempLink,
        };

      return old;
    });
  }, [service, ServiceData]);

  const handleDropDown = () => setEnable(!enable);

  const checkIfButtonIsDisabled = () => {
    setBtnState((old) => {
      return {
        ...old,
        isClicked: true,
      };
    });

    formik.validateForm();
  };

  return (
    <Styled.FormProvider value={formik}>
      <Styled.Shadow className={enable ? "inline-block" : "enabled"} />
      <Styled.Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        {Object.entries(fieldContent).map(([key, label]) => (
          <FormField
            name={key}
            key={key}
            label={label}
            fieldError={formik.errors[key as keyof FormikErrors<FormState>]}
          />
        ))}
        <Styled.ServiceSelect
          onClick={handleDropDown}
          className={enable ? "1" : "enabled"}
        >
          <ServiceDropdown
            setService={setService}
            services={companyServices}
            dropdownName={service ? split(service) : "Choose a service"}
            setEnable={setEnable}
          />
        </Styled.ServiceSelect>
        <Styled.FormSentContainer className={enable ? "open" : "flex"}>
          <Styles.ButtonWrapper onClick={checkIfButtonIsDisabled}>
            <BookACallButton
              buttonLink={btnState.link}
              withCalendly
              buttonClassName={buttonClassName}
              isDisabled={btnState.isDisabled}
              handleClose={onClose}
            />
          </Styles.ButtonWrapper>
          <Styled.FormSentFillText
            className={
              btnState.isClicked && Object.keys(formik.errors).length !== 0
                ? "show"
                : undefined
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
