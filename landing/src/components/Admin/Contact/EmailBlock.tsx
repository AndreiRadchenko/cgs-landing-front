import React from "react";
import { useFormikContext, FieldArray } from "formik";

import ButtonArrow from "../../../utils/ButtonArrow";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import * as Styled from "../../../styles/AdminPage";
import * as Styles from "../../../styles/AdminContact.styled";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";

const EmailBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IContactPageData>();

  const { subtitle: emailSubtitle, email } = values.emails ?? {
    subtitle: "",
    email: [{ popup: "", email: "" }],
  };

  const { subtitle: messengerSubtitle, messenger } = values.messengers ?? {
    subtitle: "",
    messenger: [{ name: "", link: "", image: { url: "" } }],
  };

  const handleClick = () => handleSubmit();

  return (
    <Styled.ContentWrapper>
      <SubHeaderWithInput
        width="45%"
        placeholder="Emails subtitle"
        header="Emails subtitle"
        inputValue={emailSubtitle}
        onChangeFunction={handleChange}
        name="emails.subtitle"
      />
      <FieldArray name="email">
        {() => (
          <Styles.EmailList>
            {email.map((email, index) => (
              <Styles.EmailItem key={index}>
                <SubHeaderWithInput
                  width="100%"
                  placeholder="Text for e-mail"
                  header={`Text for e-mail ${index + 1}`}
                  inputValue={email.popup}
                  onChangeFunction={handleChange}
                  name={`emails.email[${index}].popup`}
                />
                <SubHeaderWithInput
                  width="100%"
                  placeholder="Email"
                  inputValue={email.email}
                  onChangeFunction={handleChange}
                  name={`emails.email[${index}].email`}
                />
              </Styles.EmailItem>
            ))}
          </Styles.EmailList>
        )}
      </FieldArray>
      <SubHeaderWithInput
        width="45%"
        placeholder="Messengers subtitle"
        header="Messengers subtitle"
        inputValue={messengerSubtitle}
        onChangeFunction={handleChange}
        name="messenger.subtitle"
      />
      <FieldArray name="messenger">
        {() => (
          <Styles.EmailList>
            {messenger.map((messenger, index) => (
              <Styles.EmailItem key={index}>
                <SubHeaderWithInput
                  width="100%"
                  placeholder="Button name"
                  header={`Messenger ${index + 1}`}
                  inputValue={messenger.name}
                  onChangeFunction={handleChange}
                  name={`messengers.messenger[${index}].name`}
                />
                <SubHeaderWithInput
                  width="100%"
                  placeholder="Link"
                  inputValue={messenger.link}
                  onChangeFunction={handleChange}
                  name={`messengers.messenger[${index}].link`}
                />
              </Styles.EmailItem>
            ))}
          </Styles.EmailList>
        )}
      </FieldArray>
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

export default EmailBlock;
