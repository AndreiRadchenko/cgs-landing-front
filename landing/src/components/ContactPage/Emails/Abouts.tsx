import React from "react";

import { ContactButton } from "../ContactButton";

import * as Styled from "./Emails.styled";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";
import { useWindowDimension } from "../../../hooks/useWindowDimension";

type MessengersProps = Pick<IContactPageData, "abouts">;

export const Abouts = ({ abouts }: MessengersProps) => {
  const { width } = useWindowDimension();
  const { subtitle, about } = abouts;

  return (
    <Styled.EmailsContainer>
      <div>
        <Styled.EmailsTitle>{subtitle}</Styled.EmailsTitle>
        <Styled.ButtonWrapperHorizontal>
          {about.map((item, idx) => (
            <ContactButton
              key={idx}
              style={{ width: "58px", height: "58px" }}
              picture={item.image?.url ? item.image.url : ""}
              pictureWidth="32px"
              pictureHeight="32px"
              link={item.link}
            />
          ))}
        </Styled.ButtonWrapperHorizontal>
      </div>
    </Styled.EmailsContainer>
  );
};