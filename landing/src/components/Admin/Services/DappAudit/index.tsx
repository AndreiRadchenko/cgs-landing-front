import React from "react";

import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import FigureOutTermsBlock from "./FigureOutTermsBlock";
import HeadBlock from "./HeadBlock";
import WorthBlock from "../Mobile/WorthBlock";
import BlockDropdown from "../../BlockDropdown";
import HowDoWeProvideBlock from "../AiSolutions/HowDoWeProvideBlock";
import BringYourAppBlock from "../AiSolutions/BringYourAppBlock";
import TeamMembers from "../../../ServisesComponents/TeamMembers/AdminTeamMembers";

import {
  AdminBlocksContent,
  MetaBlockWraper,
} from "../../../../styles/AdminPage";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";

const ServiceAiSolutionsContentBlock = () => {
  return (
    <div>
      <AdminBlocksContent>
        <HeadBlock />
        <FigureOutTermsBlock />
        <BlockDropdown title={"Why it's worth it?"}>
          <WorthBlock />
        </BlockDropdown>
        <HowDoWeProvideBlock />
        <ServiceShowCase noMargin />
          <AdminBlockDropDown title="TEAM MEMBERS">
            <TeamMembers />
          </AdminBlockDropDown>
        <BringYourAppBlock />
      </AdminBlocksContent>
      <MetaBlockWraper>
        <MetaTagsBlock sitemap="services/smart-contract-audit" />
      </MetaBlockWraper>
    </div>
  );
};

export default ServiceAiSolutionsContentBlock;
