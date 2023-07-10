import { useFormikContext } from "formik";
import React from "react";
import {
  AdminBigButton,
  AdminHeader,
  AdminPaddedBlock,
} from "../../../../styles/AdminPage";
import TeamMembers from "../../../ServisesComponents/TeamMembers/AdminTeamMembers";
import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import FooterBlock from "./FooterBlock";
import HowDoWeWork from "./HowDoWeWork";

import MainBlock from "./MainBlock";
import StrongBlock from "./StrongBlock";
import WhatDoWeUse from "./WhatDoWeUse";
import WhoNeedApps from "./WhoNeedApps";
import WorthBlock from "./WorthBlock";
import BlockDropdown from "../../BlockDropdown";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";

const ServiceMobileContentBlock = () => {
  const { handleSubmit } = useFormikContext();
  return (
    <div>
      <AdminPaddedBlock>
        <AdminHeader>Mobile Development</AdminHeader>
        <BlockDropdown title={"Main Block"}>
          <MainBlock />
        </BlockDropdown>
        <BlockDropdown title={"Why it's worth it?"}>
          <WorthBlock />
        </BlockDropdown>
        <BlockDropdown title={"Strong block"}>
          <StrongBlock />
        </BlockDropdown>
        <BlockDropdown title={"What do we use"}>
          <WhatDoWeUse />
        </BlockDropdown>
        <BlockDropdown title={"Who needs apps?"}>
          <WhoNeedApps />
        </BlockDropdown>
        <BlockDropdown title={"Showcase"}>
          <ServiceShowCase />
        </BlockDropdown>
        <BlockDropdown title={"How do we work"}>
          <HowDoWeWork />
        </BlockDropdown>
        <BlockDropdown title={"Footer Block"}>
          <FooterBlock />
        </BlockDropdown>
        <AdminBlockDropDown title="TEAM MEMBERS">
          <TeamMembers />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <MetaTagsBlock theme="dark" sitemap="services/mobile-app-development" />
      <AdminPaddedBlock>
        <AdminBigButton type="submit" onClick={() => handleSubmit()}>
          Save changes
        </AdminBigButton>
      </AdminPaddedBlock>
    </div>
  );
};

export default ServiceMobileContentBlock;
