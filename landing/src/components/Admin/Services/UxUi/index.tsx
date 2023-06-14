import React from "react";
import { useFormikContext } from "formik";

import {
  AdminBigButton,
  AdminPaddedBlock,
  AdminHeader,
} from "../../../../styles/AdminPage";
import AdminBlockDropDown from "../../../Admin/Global/AdminBlockDropDown";
import MetaTagsBlock from "../../MetaTagsBlock";
import HeadBlock from "./HeadBlock";
import WhatDoWeDoBlock from "./WhatDoWeDoBlock";
import DesignBlock from "./DesignBlock";
import EssentialBlock from "./EssentialBlock";
import FooterBlock from "./FooterBlock";
import ServiceShowCase from "../../ServiceShowCase";
import TeamMembers from "../../../ServisesComponents/TeamMembers/AdminTeamMembers";
import OtherServices from "../../../ServisesComponents/OtherServices/AdminComponent";
import { queryKeys } from "../../../../consts/queryKeys";

const ServiceUxUiContentBlock = () => {
  const { handleSubmit } = useFormikContext();

  return (
    <div>
      <AdminPaddedBlock>
        <AdminHeader>UX/UI DESIGN</AdminHeader>
        <AdminBlockDropDown title="HEAD BLOCK">
          <HeadBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="WHAT DO WE DO">
          <WhatDoWeDoBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="ESSENTIAL BLOCK">
          <EssentialBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="DESIGN BLOCK">
          <DesignBlock />
        </AdminBlockDropDown>
      </AdminPaddedBlock>

      <div style={{ marginTop: "-3.8em" }}>
        <ServiceShowCase />
      </div>
      <AdminPaddedBlock>
        <AdminBlockDropDown title="TEAM MEMBERS">
          <TeamMembers />
        </AdminBlockDropDown>
      </AdminPaddedBlock>

      <AdminPaddedBlock style={{ margin: "-3em 0 0", paddingTop: "0" }}>
        <AdminBlockDropDown title="OTHER SERVICES">
          <OtherServices queryKey={queryKeys.getServiceUxUiPage} />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="FOOTER BLOCK">
          <FooterBlock />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <MetaTagsBlock theme="dark" sitemap="services/ux-ui-design" />
      <AdminPaddedBlock>
        <AdminBigButton type="submit" onClick={() => handleSubmit()}>
          Save changes
        </AdminBigButton>
      </AdminPaddedBlock>
    </div>
  );
};

export default ServiceUxUiContentBlock;
