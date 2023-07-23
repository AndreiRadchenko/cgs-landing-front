import React, { FC, useEffect, useRef, useState } from "react";
import { Field, useFormik } from "formik";
import * as Styled from "./Form.styled";
import FormField from "./FormField2/index";
import ThankYouModal from "../../Careers/ThankYouModal";
import Clip from "../../../../public/CareerDecorations/clip.svg";
import ClipError from "../../../../public/CareerDecorations/ClipError.svg";
import { IDataCareersResponse } from "../../../types/Admin/Response.types";
import { useMutation } from "@tanstack/react-query";
import { adminCareersService } from "../../../services/adminCareersPage";
import { IVacancyMail } from "../../../types/Mail.types";
import Close from "../../../../public/CareerDecorations/close.svg";
import Loading from "../../../../public/CareerDecorations/loading.svg";
import CareersDropdown from "../../Careers/CareersDropdown";
import ButtonArrow from "../../../utils/ButtonArrow";
import { ArrowContainer } from "../../../styles/HomePage/General.styled";

interface FormProps {
  positions: string[];
  data: IDataCareersResponse;
}

interface FormState {
  name: string;
  contact: string;
  cvlink: string;
  position: string;
  cvfile: File | string;
}

const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const Form: FC<FormProps> = ({ positions, data }) => {
  const { contact, name, CV, position: formPosition } = data.form;
  const [enable, setEnable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [inCvInput, setInCvInput] = useState(false);
  const [position, setPosition] = useState("");
  const [cvName, setCvName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [buttonState, setButtonState] = useState({
    disabled: true,
    triedSubmit: false,
  });
  const [, setCvText] = useState(CV.place);
  const ref = useRef<HTMLInputElement>(null);

  const fieldContent = { name, contact };

  const formik = useFormik<FormState>({
    initialValues: {
      name: "",
      contact: "",
      cvfile: "",
      cvlink: "",
      position: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit(values, { resetForm, validateForm }) {
      if (buttonState.disabled) {
        return setButtonState({ ...buttonState, triedSubmit: true });
      }
      validateForm();

      if (!emailPattern.test(values.contact)) {
        setButtonState({ disabled: true, triedSubmit: true });
        return;
      }

      if (!values.position) return;
      if (values.cvfile) {
        const formData = new FormData();

        formData.append("file", values.cvfile);

        setCvName("");
        CVmutate(formData);
      } else {
        mutate({
          contact: values.contact,
          name: values.name,
          position: values.position,
          cvlink: values.cvlink,
        });

        resetForm();
        setPosition("");
      }

      setIsOpen(true);
      setButtonState({ disabled: false, triedSubmit: false });
    },
  });

  const { mutate: CVmutate } = useMutation(
    (cv: FormData) => adminCareersService.uploadCV(cv),
    {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onSuccess: (data: any) => {
        const { contact, name, position } = formik.values;

        mutate({ contact, name, position, cvpath: data.filename });

        formik.resetForm();
        setPosition("");
      },
      onError: (data) => {
        console.log(data);
      },
    }
  );

  const { mutate } = useMutation((data: IVacancyMail) =>
    adminCareersService.mailForm(data)
  );

  const onFileSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value?.length) {
      setIsLoading(false);
      return;
    }

    if (!event.target.files?.length) {
      setIsLoading(false);
      return;
    }

    const file = event.target.files[0];

    setCvName(file.name);
    setIsLoading(false);
    formik.setFieldValue("cvfile", file);
    event.target.value = "";
  };

  const onCVlinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvName("");
    setIsLoading(false);
    formik.setFieldValue("cvfile", "");
    formik.setFieldValue("cvlink", event.currentTarget.value);
  };

  const checkEmpty = () =>
    formik.values.cvfile || formik.values.cvlink ? true : false;

  const onFileRemove = () => {
    setCvName("");
    formik.setFieldValue("cvfile", "");
  };

  const checkCancel = () => {
    if (!ref.current) return;

    if (!ref.current.value.length) {
      setIsLoading(false);
    } else {
      document.body.onfocus = null;
    }
  };

  useEffect(() => {
    document.body.ontouchstart = () => setTimeout(checkCancel, 100);
  }, []);

  useEffect(() => {
    const filledFields = Object.keys(formik.values).reduce((prev, curr) => {
      const element = formik.values[curr as keyof typeof formik.values];

      if (!element) return prev;

      return prev + 1;
    }, 0);

    filledFields < 4 && !buttonState.disabled
      ? setButtonState({ ...buttonState, disabled: true })
      : filledFields >= 4
      ? setButtonState({ ...buttonState, disabled: false })
      : null;
  }, [formik.values]);

  useEffect(() => {
    formik.setFieldValue("position", position);
    setEnable(false);
  }, [position]);

  return (
    <Styled.FormProvider value={formik}>
      <ThankYouModal isOpen={isOpen} setIsOpen={(val) => setIsOpen(val)} />
      <Styled.Shadow enabled={enable} />
      <Styled.Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <Styled.PositionSelect
          onClick={() => setEnable(!enable)}
          enabled={enable}
        >
          <CareersDropdown
            toFormError={buttonState.disabled && buttonState.triedSubmit}
            className="careers"
            filter={position}
            setFilter={setPosition}
            positions={positions}
            dropdownName={position ? position : formPosition}
            setEnable={setEnable}
          />
        </Styled.PositionSelect>
        {Object.entries(fieldContent).map(([key, label], idx) => (
          <FormField
            name={key}
            key={key}
            label={label}
            toFormError={buttonState.disabled && buttonState.triedSubmit}
            toFormErrorEmail={
              buttonState.disabled &&
              buttonState.triedSubmit &&
              !emailPattern.test(formik.values.contact)
            }
            className={idx == 1 ? "formEmail" : ""}
          />
        ))}
        <Styled.FormFieldContainer>
          <Styled.TitleContainer isCvIn={!!cvName.length}>
            <Styled.Format>{cvName.split(".").pop()}</Styled.Format>
            <Styled.Title>{cvName}</Styled.Title>
            <Styled.DeleteCv onClick={onFileRemove} src={Close.src} />
          </Styled.TitleContainer>
          <Styled.Cvfield
            isEmpty={checkEmpty()}
            isCvIn={!!cvName.length}
            toFormError={buttonState.disabled && buttonState.triedSubmit}
          >
            <Styled.FormField
              placeholder={CV.place}
              type={"text"}
              name={"cvlink"}
              onFocus={() => setInCvInput(true)}
              onBlur={() => {
                setCvText(CV.place);
                setInCvInput(false);
              }}
              onClick={() => {
                setCvText("");
                setIsLoading(false);
              }}
              onChange={onCVlinkChange}
            />
            <Styled.DeleteCvLink
              src={Close.src}
              cvlink={!!formik.values.cvlink?.length}
              onClick={() => formik.setFieldValue("cvlink", "")}
            />
            <Styled.Label
              inCvInput={inCvInput}
              cvlink={!!formik.values.cvlink?.length}
              toFormError={buttonState.disabled && buttonState.triedSubmit}
            >
              <Field name="lastName">
                {() => (
                  <Styled.DropCv
                    type="file"
                    name={"cvfile"}
                    accept=".pdf,.jpeg,.doc,.jpg,.png"
                    onChange={onFileSubmit}
                    onClick={() => setIsLoading(true)}
                    value={""}
                    ref={ref}
                  />
                )}
              </Field>
              <Styled.Loading
                src={Loading.src}
                alt="Load in Progress"
                isLoading={isLoading}
              />
              <Styled.LabelWithClipContainer isLoading={isLoading}>
                <Styled.Clip
                  src={
                    buttonState.disabled && buttonState.triedSubmit
                      ? ClipError.src
                      : Clip.src
                  }
                  alt="Staple"
                />
                <Styled.LabelTitle>add file</Styled.LabelTitle>
              </Styled.LabelWithClipContainer>
            </Styled.Label>
          </Styled.Cvfield>
        </Styled.FormFieldContainer>
        <Styled.FormSentContainer isCvIn={!!cvName.length}>
          <Styled.FormSentButton
            type="submit"
            isDisabled={buttonState.disabled}
          >
            <Styled.FormSentText>Submit</Styled.FormSentText>
            <ArrowContainer>
              <ButtonArrow />
            </ArrowContainer>
          </Styled.FormSentButton>
          <Styled.FormSentFillText
            toDisplay={buttonState.disabled && buttonState.triedSubmit}
          >
            &lt; Fill in all the fields &gt;
          </Styled.FormSentFillText>
        </Styled.FormSentContainer>
      </Styled.Form>
    </Styled.FormProvider>
  );
};

export default Form;
