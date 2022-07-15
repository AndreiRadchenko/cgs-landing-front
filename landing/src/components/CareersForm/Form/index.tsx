import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Styled from "./Form.styled";

import FormField from "./FormField/index";
import BlogDropdown from "../../Blog/BlogDropdown";
import ThankYouModal from "../../Careers/ThankYouModal";
import Clip from "../../../../public/CareerDecorations/clip.svg";

interface FormProps {
  positions: string[];
}

interface FormState {
  name: string | null;
  contact: string | null;
  cvlink: string | null;
  position: string | null;
  cvlinkfile: string | null;
}

const Form: FC<FormProps> = ({ positions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inCvInput, setInCvInput] = useState(false);
  const [position, setPosition] = useState("");
  const [cvName, setCvName] = useState(
    "< If your CV shareable via a link, put it here >"
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;

    const file = event.target.files[0];

    console.log(file);

    setCvName(file.name);
    formik.setFieldValue("file", file);
  };

  const formik = useFormik<FormState>({
    initialValues: {
      name: null,
      contact: null,
      cvlink: null,
      position: null,
      cvlinkfile: null,
    },
    onSubmit(values, { resetForm }) {
      values.position = position;

      resetForm();
    },
  });

  const fieldContent = {
    name: "< Name >",
    contact: "< How to contact you? >",
  };

  useEffect(() => {
    if (!position || position !== "None of the above") return;

    setPosition("");
  }, [position]);

  useEffect(() => {
    if (formik.values.cvlinkfile) {
      setCvName(formik.values.cvlinkfile.split("\\").pop()!);
    }
  }, [formik.values.cvlinkfile]);

  return (
    <Styled.FormProvider value={formik}>
      <ThankYouModal isOpen={isOpen} setIsOpen={(val) => setIsOpen(val)} />
      <Styled.Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <Styled.PositionSelect>
          <BlogDropdown
            filter={position}
            setFilter={setPosition}
            tags={positions}
            dropdownName={position ? position : "Position"}
          />
        </Styled.PositionSelect>
        {Object.entries(fieldContent).map(([key, label]) => {
          return <FormField name={key} key={key} label={label} />;
        })}
        <Styled.FormFieldContainer>
          <Styled.Cvfield>
            <Styled.FormField
              placeholder={cvName}
              type={"text"}
              name={"cvlink"}
              onFocus={() => setInCvInput(true)}
              onBlur={() => setInCvInput(false)}
            />
            <Styled.Label inCvInput={inCvInput}>
              <Styled.DropCv
                type="file"
                name={"cvlinkfile"}
                accept=".pdf,.jpeg"
              />
              <Styled.Clip src={Clip.src} />
              <Styled.LabelTitle>.pdf, .jpeg</Styled.LabelTitle>
            </Styled.Label>
          </Styled.Cvfield>
        </Styled.FormFieldContainer>
        <Styled.FormSentContainer>
          <Styled.FormSentButton type="submit" onClick={() => setIsOpen(true)}>
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
