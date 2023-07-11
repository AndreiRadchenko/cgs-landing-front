import React from "react";
import { AdminHeader, AdminPaddedBlock } from "../../../../styles/AdminPage";
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
        <BlockDropdown title={"Who needs apps?"}>
          <WhoNeedApps />
        </BlockDropdown>
        <BlockDropdown title={"What do we use"}>
          <WhatDoWeUse />
        </BlockDropdown>
        <AdminBlockDropDown title="TEAM MEMBERS">
          <TeamMembers />
        </AdminBlockDropDown>
        <BlockDropdown title={"Showcase"}>
          <ServiceShowCase />
        </BlockDropdown>
        <BlockDropdown title={"How do we work"}>
          <HowDoWeWork />
        </BlockDropdown>
        <BlockDropdown title={"Footer Block"}>
          <FooterBlock />
        </BlockDropdown>
      </AdminPaddedBlock>
      <MetaTagsBlock theme="dark" sitemap="services/mobile-app-development" />
    </div>
  );
};

export default ServiceMobileContentBlock;
