import React from "react";

import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import BringYourAppBlock from "./BringYourAppBlock";
import FigureOutTermsBlock from "./FigureOutTermsBlock";
import AdminHeadBlockAi from "./AdminHeadBlockAi";
import HowDoWeProvideBlock from "./HowDoWeProvideBlock";
import WhyIsDappsBlock from "./WhyIsDappsBlock";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";

import {
  AdminBlocksContent,
  MetaBlockWraper,
} from "../../../../styles/AdminPage";

const ServiceDappAuditContentBlock = () => {
  return (
    <div>
      <AdminBlocksContent>
        <AdminHeadBlockAi />
        <FigureOutTermsBlock />
        <WhyIsDappsBlock />
        <HowDoWeProvideBlock />
        <AdminBlockDropDown title="Showcase">
          <ServiceShowCase noMargin />
        </AdminBlockDropDown>
        <BringYourAppBlock />
      </AdminBlocksContent>
      <MetaBlockWraper>
        <MetaTagsBlock sitemap="services/smart-contract-audit" />
      </MetaBlockWraper>
    </div>
  );
};

export default ServiceDappAuditContentBlock;
