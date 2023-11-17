import React from "react";

import { ContactButton } from "../ContactButton";

import * as Styled from "./Emails.styled";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";
import { MessengersContainer } from "./Messengers.styled";

type MessengersProps = Pick<IContactPageData, "messengers">;

export const Messengers = ({ messengers }: MessengersProps) => {
  const { subtitle, messenger } = messengers;

  return (
    <Styled.EmailsContainer>
      <MessengersContainer>
        <Styled.EmailsTitle>{subtitle}</Styled.EmailsTitle>
        <Styled.ButtonWrapper>
          {messenger.map((item, idx) => (
            <ContactButton
              key={idx}
              className="messenger-button"
              picture={item.image?.url ? item.image.url : ""}
              text={item.name}
              link={item.link}
              newTab
            />
          ))}
        </Styled.ButtonWrapper>
      </MessengersContainer>
    </Styled.EmailsContainer>
  );
};
