import { useFormikContext } from "formik";
import React from "react";
import { AdminBigButton, AdminPaddedBlock } from "../../../../styles/AdminPage";
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

const ServiceMobileContentBlock = () => {
  const { handleSubmit } = useFormikContext();
  return (
    <div>
      <MainBlock />
      <div style={{ marginInline: "40px" }}>
        <BlockDropdown title={"Why it's worth it?"}>
          <WorthBlock />
        </BlockDropdown>
      </div>
      <StrongBlock />
      <WhatDoWeUse />
      <div style={{ marginInline: "40px" }}>
        <BlockDropdown title={"Who needs apps?"}>
          <WhoNeedApps />
        </BlockDropdown>
      </div>
      <ServiceShowCase />
      <HowDoWeWork />
      <FooterBlock />
      <TeamMembers />
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
