import React from "react";

import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import FigureOutTermsBlock from "./FigureOutTermsBlock";
import AdminHeadBlockDapp from "./AdminHeadBlockDapp";
import WorthBlock from "../Mobile/WorthBlock";
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
        <AdminHeadBlockDapp />
        <FigureOutTermsBlock />
        <AdminBlockDropDown title={"Why it's worth it?"}>
          <WorthBlock />
        </AdminBlockDropDown>
        <HowDoWeProvideBlock />
        <AdminBlockDropDown title="Showcase">
          <ServiceShowCase noMargin />
        </AdminBlockDropDown>
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
