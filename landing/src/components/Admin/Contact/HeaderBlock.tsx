import React from "react";
import { useFormikContext } from "formik";
import dynamic from "next/dynamic";
import { useQueryClient } from "@tanstack/react-query";

import ButtonArrow from "../../../utils/ButtonArrow";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import HistoryLink from "../HistoryLink";

import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import * as Styles from "../../../styles/AdminContact.styled";
import * as Styled from "../../../styles/AdminPage";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";
import { queryKeys } from "../../../consts/queryKeys";

const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

const HeaderBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IContactPageData>([
    queryKeys.getContactPage,
  ])?.header;

  const { values, handleChange, handleSubmit } =
    useFormikContext<IContactPageData>();

  values.header.lastModified = data?.lastModified;

  const {
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
      {data?.lastModified && (
        <HistoryLink
          sectionName="Header"
          lastModified={data?.lastModified}
          link={"/history/contacts/header"}
        />
      )}
      <Styles.TitleWrapper>
        <TextEditor header="Title" name="header.title" />
      </Styles.TitleWrapper>

      <Styles.Headlines>
        <div style={{ flexGrow: "1" }}>
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
            placeholder="Phone number"
            header=""
            inputValue={service}
            onChangeFunction={handleChange}
            name="header.placeholders.service"
          />
          {/* <TextEditor
            props={{ width: "600px" }}
            header="Phone number label"
            name="header.placeholders.service"
          /> */}
        </div>
        <div style={{ flexGrow: "1" }}>
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
