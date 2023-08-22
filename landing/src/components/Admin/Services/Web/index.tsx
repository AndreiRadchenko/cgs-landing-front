import React from "react";

import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import ComparisonBlock from "./ComparisonBlock";
import AdminFooterBlockWeb from "./AdminFooterBlockWeb";
import AdminHeadBlockWeb from "./AdminHeadBlockWeb";
import SolutionBlock from "./SolutionBlock";
import FreeServices from "../../../ServisesComponents/FreeServices/AdminComponent";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import TeamMembers from "../../../ServisesComponents/TeamMembers/AdminTeamMembers";
import { queryKeys } from "../../../../consts/queryKeys";

import { AdminHeader, AdminPaddedBlock } from "../../../../styles/AdminPage";

const ServiceMobileContentBlock = () => {
  return (
    <div>
      <AdminPaddedBlock>
        <AdminHeader>Web // Desktop Development</AdminHeader>
        <AdminBlockDropDown title="Head Block">
          <AdminHeadBlockWeb />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="Comparison Block">
          <ComparisonBlock />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="Solution Block">
          <SolutionBlock />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="Showcase">
          <ServiceShowCase />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="TEAM MEMBERS">
          <TeamMembers
            serviceName={"web"}
            queryKey={queryKeys.getServiceWebPage}
          />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="FREE SERVICES">
          <FreeServices
            serviceName={"web"}
            queryKey={queryKeys.getServiceWebPage}
          />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="Footer block">
          <AdminFooterBlockWeb />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <MetaTagsBlock
        theme="dark"
        sitemap="services/web-development"
        queryKey={queryKeys.getServiceWebPage}
        serviceName={"web"}
      />
    </div>
  );
};

export default ServiceMobileContentBlock;
