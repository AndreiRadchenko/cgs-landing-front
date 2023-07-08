import React from "react";

import { ContactButton } from "../ContactButton";

import * as Styled from "./Emails.styled";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";
import { useWindowDimension } from "../../../hooks/useWindowDimension";

type MessengersProps = Pick<IContactPageData, "socials">;

export const Socials = ({ socials }: MessengersProps) => {
  const { width } = useWindowDimension();
  const { subtitle, social } = socials;

  return (
    <Styled.EmailsContainer>
      <div>
        <Styled.EmailsTitle>{subtitle}</Styled.EmailsTitle>
        <Styled.ButtonWrapperHorizontal>
          {social.map((item, idx) => (
            <ContactButton
              key={idx}
              style={{ width: "58px", height: "58px" }}
              picture={item.image?.url ? item.image.url : ""}
              pictureWidth="32px"
              pictureHeight="32px"
              //   text={item.name}
              link={item.link}
              newTab
            />
          ))}
        </Styled.ButtonWrapperHorizontal>
      </div>
    </Styled.EmailsContainer>
  );
};
