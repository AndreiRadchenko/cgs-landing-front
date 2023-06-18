import React from "react";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useQueryClient } from "@tanstack/react-query";
import parse from "html-react-parser";

import Title from "./Title";
import BookForm from "./BookForm";
import Map from "./Map";
import { Emails, Messengers, Socials, Abouts } from "./Emails";

import * as Styled from "./Contact.styled";
import { IContactPageData } from "../../types/Admin/AdminContact.types";

interface IContact {
  data: IContactPageData;
}

const Contact = ({ data }: IContact) => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const { header, emails, messengers, socials, abouts, location } = data;

  return (
    <Styled.Layout>
      <Title title={header.title} />
      <BookForm header={header} />
      <Styled.MediaContainer>
        <Emails emails={emails} />
        <Socials socials={socials} />
        <Messengers messengers={messengers} />
        <Abouts abouts={abouts} />
      </Styled.MediaContainer>
      <Map location={location} />
    </Styled.Layout>
  );
};

export default Contact;
