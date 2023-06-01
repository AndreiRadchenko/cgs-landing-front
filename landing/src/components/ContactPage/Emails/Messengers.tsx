import React from "react";

import { ContactButton } from "../ContactButton";

import * as Styled from "./Emails.styled";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";
import { useWindowDimension } from "../../../hooks/useWindowDimension";

type MessengersProps = Pick<IContactPageData, "messengers">;

export const Messengers = ({ messengers }: MessengersProps) => {
  const { width } = useWindowDimension();
  const { subtitle, messenger } = messengers;

  return (
    <Styled.EmailsContainer>
      <div>
        <Styled.EmailsTitle>{subtitle}</Styled.EmailsTitle>
        <Styled.ButtonWrapper>
          {messenger.map((item, idx) => (
            <ContactButton
              key={idx}
              style={{ width: "322px", height: "58px" }}
              picture={item.image?.url ? item.image.url : ""}
              pictureWidth="24px"
              pictureHeight="24px"
              text={item.name}
              link={item.link}
            />
          ))}
        </Styled.ButtonWrapper>
      </div>
    </Styled.EmailsContainer>
  );
};
