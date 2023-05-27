import React from "react";
import { useFormikContext } from "formik";
import dynamic from "next/dynamic";

import { ComponentLoader } from "../../Loader";

import ButtonArrow from "../../../utils/ButtonArrow";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import * as Styles from "../../../styles/AdminContact.styled";
import * as Styled from "../../../styles/AdminPage";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";

const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

const HeaderBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IContactPageData>();

  const {
    title,
    placeholders: { name, email, service },
    button: { name: buttonName, calendly },
  } = values.header ?? {
    title: "",
    placeholders: { name: "", email: "", service: "" },
    button: { name: "", calendly: "" },
  };

  const handleClick = () => handleSubmit();
  return (
    <Styled.ContentWrapper>
      <Styles.TitleWrapper>
        <TextEditor header="Title" name="header.title" />
      </Styles.TitleWrapper>

      <Styles.Headlines>
        <div>
          <SubHeaderWithInput
            placeholder="Name"
            header="Form placeholders"
            inputValue={name}
            onChangeFunction={handleChange}
            name="header.placeholders.name"
          />
          <SubHeaderWithInput
            placeholder="Email"
            header=""
            inputValue={email}
            onChangeFunction={handleChange}
            name="header.placeholders.email"
          />
          <SubHeaderWithInput
            placeholder="Choose a service"
            header=""
            inputValue={service}
            onChangeFunction={handleChange}
            name="header.placeholders.service"
          />
        </div>
        <div>
          <SubHeaderWithInput
            placeholder="Button name"
            header="Form submit button"
            inputValue={buttonName}
            onChangeFunction={handleChange}
            name="header.button.name"
          />
          <SubHeaderWithInput
            placeholder="Add link here"
            header=""
            inputValue={calendly}
            onChangeFunction={handleChange}
            name="header.button.calendly"
          />
        </div>
      </Styles.Headlines>
      <div>
        <BlackButton
          size={"1.5em"}
          padding={"1.11em 3em"}
          style={{ marginTop: "1.33em" }}
          onClick={handleClick}
        >
          Save Changes
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </div>
    </Styled.ContentWrapper>
  );
};

export default HeaderBlock;
