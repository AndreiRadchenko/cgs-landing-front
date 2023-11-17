import React from "react";

import { ContactButton } from "../ContactButton";

import * as Styled from "./Emails.styled";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";
import { SocialsContainer } from "./Socials.styled";

type MessengersProps = Pick<IContactPageData, "socials">;

export const Socials = ({ socials }: MessengersProps) => {
  const { subtitle, social } = socials;

  return (
    <Styled.EmailsContainer>
      <SocialsContainer>
        <Styled.EmailsTitle>{subtitle}</Styled.EmailsTitle>
        <Styled.ButtonWrapperHorizontal>
          {social.map((item, idx) => (
            <ContactButton
              key={idx}
              className="social-button"
              picture={item.image?.url ? item.image.url : ""}
              link={item.link}
              newTab
            />
          ))}
        </Styled.ButtonWrapperHorizontal>
      </SocialsContainer>
    </Styled.EmailsContainer>
  );
};
