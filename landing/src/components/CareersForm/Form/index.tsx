import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Styled from "./Form.styled";

import FormField from "./FormField2/index";
import BlogDropdown from "../../Blog/BlogDropdown";
import ThankYouModal from "../../Careers/ThankYouModal";
import Clip from "../../../../public/CareerDecorations/clip.svg";
import { IDataCareersResponse } from "../../../types/Admin/Response.types";
import { useMutation } from "react-query";
import { adminCareersService } from "../../../services/adminCareersPage";
import { IVacancyMail } from "../../../types/Mail.types";

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

const Form: FC<FormProps> = ({ positions, data }) => {
  const { contact, name, CV, position: formPosition } = data.form;
  const [isOpen, setIsOpen] = useState(false);
  const [inCvInput, setInCvInput] = useState(false);
  const [position, setPosition] = useState("");
  const [cvName, setCvName] = useState(CV.place);

  const onFileSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;

    const file = event.target.files[0];

    setCvName(file.name);
    formik.setFieldValue("cvfile", file);
    event.target.value = "";
  };

  const onCVlinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvName(CV.place);
    formik.setFieldValue("cvfile", "");
    formik.setFieldValue("cvlink", event.currentTarget.value);
  };

  const checkEmpty = () =>
    formik.values.cvfile || formik.values.cvlink ? true : false;

  const formik = useFormik<FormState>({
    initialValues: {
      name: "",
      contact: "",
      cvfile: "",
      cvlink: "",
      position: "",
    },
    onSubmit(values, { resetForm }) {
      values.position = position;

      if (!values.position) return;
      if (values.cvfile) {
        const formData = new FormData();

        formData.append("file", values.cvfile);

        setCvName(CV.place);
        CVmutate(formData);
      } else {
        mutate({
          contact: values.contact,
          name: values.name,
          position: values.position,
          cvlink: values.cvlink,
        });
      }

      setIsOpen(true);
      resetForm();
    },
  });

  const { mutate: CVmutate } = useMutation(
    (cv: FormData) => adminCareersService.uploadCV(cv),
    {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onSuccess: (data: any) => {
        const { contact, name, position } = formik.values;

        mutate({
          contact,
          name,
          position,
          cvpath: data.filename,
        });
      },
      onError: (data) => {
        console.log(data);
      },
    }
  );

  const { mutate } = useMutation(
    (data: IVacancyMail) => adminCareersService.mailForm(data),
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  const fieldContent = {
    name,
    contact,
  };

  useEffect(() => {
    if (!position || position !== "None of the above") return;

    setPosition("");
  }, [position]);

  return (
    <Styled.FormProvider value={formik}>
      <ThankYouModal isOpen={isOpen} setIsOpen={(val) => setIsOpen(val)} />
      <Styled.Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <Styled.PositionSelect>
          <BlogDropdown
            filter={position}
            setFilter={setPosition}
            tags={positions}
            dropdownName={position ? position : formPosition}
          />
        </Styled.PositionSelect>
        {Object.entries(fieldContent).map(([key, label]) => (
          <FormField name={key} key={key} label={label} />
        ))}
        <Styled.FormFieldContainer>
          <Styled.Cvfield isEmpty={checkEmpty()}>
            <Styled.FormField
              placeholder={cvName}
              type={"text"}
              name={"cvlink"}
              onFocus={() => setInCvInput(true)}
              onBlur={() => setInCvInput(false)}
              onChange={onCVlinkChange}
            />
            <Styled.Label
              inCvInput={inCvInput}
              cvlink={formik.values.cvlink?.length ? true : false}
            >
              <Styled.DropCv
                type="file"
                name={"cvfile"}
                accept=".pdf,.jpeg"
                onChange={onFileSubmit}
                value={""}
              />
              <Styled.Clip src={Clip.src} />
              <Styled.LabelTitle>.pdf, .jpeg</Styled.LabelTitle>
            </Styled.Label>
          </Styled.Cvfield>
        </Styled.FormFieldContainer>
        <Styled.FormSentContainer>
          <Styled.FormSentButton type="submit">
            <Styled.FormSentWrap>&lt;a&gt;</Styled.FormSentWrap>
            <Styled.FormSentText>send</Styled.FormSentText>
            <Styled.FormSentWrap>&lt;a&gt;</Styled.FormSentWrap>
          </Styled.FormSentButton>
        </Styled.FormSentContainer>
      </Styled.Form>
    </Styled.FormProvider>
  );
};

export default Form;
