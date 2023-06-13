import React from "react";
import {
  AdminBlocksContent,
  MetaBlockWraper,
} from "../../../../styles/AdminPage";
import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import BringAppBlock from "./BringAppBlock";
import HeaderBlock from "./HeaderBlock";
import HowDoWeAuditBlock from "./HowDoWeAuditBlock";
import TeamProvides from "./TeamProvides";
import WhatAppBlock from "./WhatAppBlock";
import WhenDoYouNeedBlock from "./WhenDoYouNeedBlock";

const ServiceMobileAuditContentBlock = () => {
  return (
    <div>
      <AdminBlocksContent>
        <HeaderBlock />
        <WhatAppBlock />
        <TeamProvides />
        <WhenDoYouNeedBlock />
        <ServiceShowCase noMargin />
        <HowDoWeAuditBlock />
        <BringAppBlock />
      </AdminBlocksContent>
      <MetaBlockWraper>
        <MetaTagsBlock sitemap="services/mobile-audit" />
      </MetaBlockWraper>
    </div>
  );
};

export default ServiceMobileAuditContentBlock;
