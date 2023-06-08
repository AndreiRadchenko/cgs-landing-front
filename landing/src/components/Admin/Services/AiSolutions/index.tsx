import React from "react";
import {
  AdminBlocksContent,
  MetaBlockWraper,
} from "../../../../styles/AdminPage";
import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import FigureOutTermsBlock from "./FigureOutTermsBlock";
import HeadBlock from "./HeadBlock";

const ServiceAiSolutionsContentBlock = () => {
  return (
    <div>
      <AdminBlocksContent>
        <HeadBlock />
        <FigureOutTermsBlock />
        <ServiceShowCase noMargin />
      </AdminBlocksContent>
      <MetaBlockWraper>
        <MetaTagsBlock sitemap="services/smart-contract-audit" />
      </MetaBlockWraper>
    </div>
  );
};

export default ServiceAiSolutionsContentBlock;
