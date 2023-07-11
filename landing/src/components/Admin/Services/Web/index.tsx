import React from "react";
import { AdminHeader, AdminPaddedBlock } from "../../../../styles/AdminPage";
import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import ComparisonBlock from "./ComparisonBlock";
import FooterBlock from "./FooterBlock";
import MainBlock from "./MainBlock";
import SolutionBlock from "./SolutionBlock";
import FreeServices from "../../../ServisesComponents/FreeServices/AdminComponent";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import TeamMembers from "../../../ServisesComponents/TeamMembers/AdminTeamMembers";

const ServiceMobileContentBlock = () => {
  return (
    <div>
      <AdminPaddedBlock>
        <AdminHeader>Web // Desktop Development</AdminHeader>
        <AdminBlockDropDown title="Head Block">
          <MainBlock />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="Comparison Block">
          <ComparisonBlock />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="Solution Block">
          <SolutionBlock />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="Service ShowCase">
          <ServiceShowCase />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="FREE SERVICES">
          <FreeServices />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="TEAM MEMBERS">
          <TeamMembers />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="Footer block">
          <FooterBlock />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <MetaTagsBlock theme="dark" sitemap="services/web-development" />
    </div>
  );
};

export default ServiceMobileContentBlock;
