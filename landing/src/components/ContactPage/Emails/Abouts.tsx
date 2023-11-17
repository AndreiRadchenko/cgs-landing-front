import React from "react";

import { ContactButton } from "../ContactButton";

import * as Styled from "./Emails.styled";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";
import { AboutsContainer } from "./Abouts.styled";

type MessengersProps = Pick<IContactPageData, "abouts">;

export const Abouts = ({ abouts }: MessengersProps) => {
  const { subtitle, about } = abouts;

  return (
    <Styled.EmailsContainer>
      <AboutsContainer>
        <Styled.EmailsTitle>{subtitle}</Styled.EmailsTitle>
        <Styled.ButtonWrapperHorizontal>
          {about.map((item, idx) => (
            <ContactButton
              key={idx}
              className="about-button"
              picture={item.image?.url ? item.image.url : ""}
              link={item.link}
              newTab
            />
          ))}
        </Styled.ButtonWrapperHorizontal>
      </AboutsContainer>
    </Styled.EmailsContainer>
  );
};
