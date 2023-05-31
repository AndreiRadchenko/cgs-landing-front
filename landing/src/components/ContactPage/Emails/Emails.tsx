import React from "react";
import Image from "next/image";

import { ContactButton } from "../ContactButton";

import * as Styled from "./Emails.styled";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";
import { useWindowDimension } from "../../../hooks/useWindowDimension";

type EmailProps = Pick<IContactPageData, "emails">;

export const Emails = ({ emails }: EmailProps) => {
  const { width } = useWindowDimension();
  const { subtitle, email } = emails;

  return (
    <Styled.EmailsContainer>
      <div>
        <Styled.EmailsTitle>{subtitle}</Styled.EmailsTitle>
        <Styled.ButtonWrapper>
          {email.map((item, idx) => (
            <ContactButton
              key={idx}
              style={{ width: "322px", height: "58px" }}
              pictureWidth="20px"
              pictureHeight="14px"
              text={item.email}
              link={"mailto:" + email}
            />
          ))}
        </Styled.ButtonWrapper>
      </div>
    </Styled.EmailsContainer>
  );
};
