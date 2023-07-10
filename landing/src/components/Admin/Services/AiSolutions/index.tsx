import React from "react";
import {
  AdminBlocksContent,
  MetaBlockWraper,
} from "../../../../styles/AdminPage";
import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import BringYourAppBlock from "./BringYourAppBlock";
import FigureOutTermsBlock from "./FigureOutTermsBlock";
import HeadBlock from "./HeadBlock";
import HowDoWeProvideBlock from "./HowDoWeProvideBlock";
import WhyIsDappsBlock from "./WhyIsDappsBlock";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";

const ServiceDappAuditContentBlock = () => {
  return (
    <div>
      <AdminBlocksContent>
        <HeadBlock />
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
