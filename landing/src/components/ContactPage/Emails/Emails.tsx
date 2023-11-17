import React from "react";

import { ContactButton } from "../ContactButton";
import { EmailPopup, PopupWrapper, PersistPopup } from "../Popup";

import * as Styled from "./Emails.styled";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";

type EmailProps = Pick<IContactPageData, "emails">;

export const Emails = ({ emails }: EmailProps) => {
  const { subtitle, email } = emails;

  return (
    <Styled.EmailsContainer className="emails-messenger-container">
      <div>
        <Styled.EmailsTitle className="emails-title">
          {subtitle}
        </Styled.EmailsTitle>
        <Styled.ButtonWrapper className="emails">
          {email.map((item, idx) => (
            <PopupWrapper key={idx}>
              <ContactButton
                key={idx}
                className="email-button"
                text={item.email}
                link={"mailto: " + item.email}
              />
              <EmailPopup
                style={{
                  top: "-10px",
                  width: "18em",
                  padding: "12px 34px",
                }}
              >
                {item.popup}
              </EmailPopup>
              <PersistPopup style={{ width: "100%" }}>
                {item.popup}
              </PersistPopup>
            </PopupWrapper>
          ))}
        </Styled.ButtonWrapper>
      </div>
    </Styled.EmailsContainer>
  );
};
