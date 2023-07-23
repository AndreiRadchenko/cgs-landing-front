import React from "react";
import { Form } from "formik";

import HeaderBlock from "./HeaderBlock";
import EmailBlock from "./EmailBlock";
import SocialBlock from "./SocialBlock";
import LocationBlock from "./LocationBlock";
import MetaTagsBlock from "../MetaTagsBlock";
import AdminBlockDropDown from "../../Admin/Global/AdminBlockDropDown";

import * as Styled from "../../../styles/AdminPage";
import { queryKeys } from "../../../consts/queryKeys";

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
          <AdminBlockDropDown title="SOCIAL MEDIA">
            <SocialBlock />
          </AdminBlockDropDown>
          <AdminBlockDropDown title="LOCATION">
            <LocationBlock />
          </AdminBlockDropDown>
        </Styled.AdminBlocksContent>
        <Styled.MetaBlockWraper>
          <MetaTagsBlock
            theme="dark"
            sitemap="/"
            queryKey={queryKeys.getContactPage}
            historyLink="/history/contacts/meta"
          />
        </Styled.MetaBlockWraper>
      </Form>
    </Styled.AdminContentBlock>
  );
};

export default ContactForm;
