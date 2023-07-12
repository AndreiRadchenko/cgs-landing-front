import React from "react";

import { ContactButton } from "../ContactButton";
import { EmailPopup, PopupWrapper, PersistPopup } from "../Popup";

import * as Styled from "./Emails.styled";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";
import { useWindowDimension } from "../../../hooks/useWindowDimension";

type EmailProps = Pick<IContactPageData, "emails">;

export const Emails = ({ emails }: EmailProps) => {
  const { width: displayWidth } = useWindowDimension();
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
                style={{ width: "322px", height: "58px" }}
                className={"email-button"}
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
              {displayWidth! <= 768 && (
                <PersistPopup style={{ width: "100%" }}>
                  {item.popup}
                </PersistPopup>
              )}
            </PopupWrapper>
          ))}
        </Styled.ButtonWrapper>
      </div>
    </Styled.EmailsContainer>
  );
};
