import React from "react";
import { Form } from "formik";

import HeaderBlock from "./HeaderBlock";
import EmailBlock from "./EmailBlock";
import SocialBlock from "./SocialBlock";
import LocationBlock from "./LocationBlock";
import MetaTagsBlock from "../MetaTagsBlock";
import AdminBlockDropDown from "../../Admin/Global/AdminBlockDropDown";

import * as Styled from "../../../styles/AdminPage";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";

const ContactForm = ({ data }: { data: IContactPageData }) => {
  return (
    <Styled.AdminContentBlock>
      <Form>
        <Styled.AdminBlocksContent>
          <Styled.AdminHeader>CONTACT</Styled.AdminHeader>
          <AdminBlockDropDown title="HEADER">
            <HeaderBlock />
          </AdminBlockDropDown>
          <AdminBlockDropDown title="EMAIL // MESSENGERS">
            <EmailBlock />
          </AdminBlockDropDown>
          <AdminBlockDropDown title="SOCIAL MEDIA">
            <SocialBlock />
          </AdminBlockDropDown>
          <AdminBlockDropDown title="LOCATION">
            <LocationBlock />
          </AdminBlockDropDown>
        </Styled.AdminBlocksContent>
        <Styled.MetaBlockWraper>
          <MetaTagsBlock theme="dark" sitemap="/" />
        </Styled.MetaBlockWraper>
      </Form>
    </Styled.AdminContentBlock>
  );
};

export default ContactForm;
