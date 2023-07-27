import React from "react";
import { AdminHeader, AdminPaddedBlock } from "../../../../styles/AdminPage";
import TeamMembers from "../../../ServisesComponents/TeamMembers/AdminTeamMembers";
import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import AdminFooterBlockMobile from "./AdminFooterBlockMobile";
import HowDoWeWork from "./HowDoWeWork";

import AdminHeadBlockMobile from "./AdminHeadBlockMobile";
import StrongBlock from "./StrongBlock";
import WhatDoWeUse from "./WhatDoWeUse";
import WhoNeedApps from "./WhoNeedApps";
import WorthBlock from "./WorthBlock";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";

const ServiceMobileContentBlock = () => {
  return (
    <div>
      <AdminPaddedBlock>
        <AdminHeader>Mobile Development</AdminHeader>
        <AdminBlockDropDown title={"HEAD BLOCK"}>
          <AdminHeadBlockMobile />
        </AdminBlockDropDown>
        <AdminBlockDropDown title={"Why it's worth it?"}>
          <WorthBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title={"Strong block"}>
          <StrongBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title={"Who needs apps?"}>
          <WhoNeedApps />
        </AdminBlockDropDown>
        <AdminBlockDropDown title={"What do we use"}>
          <WhatDoWeUse />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="TEAM MEMBERS">
          <TeamMembers />
        </AdminBlockDropDown>
        <AdminBlockDropDown title={"Showcase"}>
          <ServiceShowCase />
        </AdminBlockDropDown>
        <AdminBlockDropDown title={"How do we work"}>
          <HowDoWeWork />
        </AdminBlockDropDown>
        <AdminBlockDropDown title={"Footer Block"}>
          <AdminFooterBlockMobile />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <MetaTagsBlock theme="dark" sitemap="services/mobile-app-development" />
    </div>
  );
};

export default ServiceMobileContentBlock;
