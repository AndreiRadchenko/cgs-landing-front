import React from "react";
import { Form } from "formik";

import HeaderBlock from "./HeaderBlock";
import EmailBlock from "./EmailBlock";
import MetaTagsBlock from "../MetaTagsBlock";
import AdminBlockDropDown from "../../Admin/Global/AdminBlockDropDown";

import * as Styled from "../../../styles/AdminPage";

const ContactForm = () => {
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
        </Styled.AdminBlocksContent>
        <Styled.MetaBlockWraper>
          <MetaTagsBlock theme="dark" sitemap="/" />
        </Styled.MetaBlockWraper>
      </Form>
    </Styled.AdminContentBlock>
  );
};

export default ContactForm;
