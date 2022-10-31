import React from "react";
import {
  AdminBlocksContent,
  MetaBlockWraper,
} from "../../../../styles/AdminPage";
import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import BringYourAppBlock from "./BringYourAppBlock";
import HeaderBlock from "./HeaderBlock";
import HowToDoBlock from "./HowToDoBlock";
import TypesBlock from "./TypesBlock";
import WhatIsBlock from "./WhatIsBlock";

const ServiceWebAuditContentBlock = () => {
  return (
    <div>
      <AdminBlocksContent>
        <HeaderBlock />
        <WhatIsBlock />
        <TypesBlock />
        <ServiceShowCase />
        <HowToDoBlock />
        <BringYourAppBlock />
      </AdminBlocksContent>
      <MetaBlockWraper>
        <MetaTagsBlock sitemap="services/web-audit" />
      </MetaBlockWraper>
    </div>
  );
};

export default ServiceWebAuditContentBlock;
