import React from "react";
import { AdminHeader, AdminPaddedBlock } from "../../../../styles/AdminPage";
import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import AdminFooterBlockSupport from "./AdminFooterBlockSupport";
import AdminHeadBlockSupport from "./AdminHeadBlockSupport";
import ProvideBlock from "./ProvideBlock";
import SubtitleBlock from "./SubtitleBlock";
import AdminBlockDropDown from "../../../Admin/Global/AdminBlockDropDown";
import Bonuses from "../../../ServisesComponents/Bonuses/AdminComponent";
import { queryKeys } from "../../../../consts/queryKeys";
import TeamMembers from "../../../ServisesComponents/TeamMembers/AdminTeamMembers";
import OtherServices from "../../../ServisesComponents/OtherServices/AdminComponent";

const ServiceSupportContentBlock = () => {
  return (
    <div>
      <AdminPaddedBlock>
        <AdminHeader>Ongoing Support // Maintenance</AdminHeader>
        <AdminBlockDropDown title="HEAD BLOCK">
          <AdminHeadBlockSupport />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="WHAT DO WE DO">
          <SubtitleBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="PROVIDE">
          <ProvideBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="BONUSES">
          <Bonuses queryKey={queryKeys.getServiceSupportPage} />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="SHOWCASE">
          <ServiceShowCase />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="TEAM MEMBERS">
          <TeamMembers />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="OTHER SERVICES">
          <OtherServices queryKey={queryKeys.getServiceSupportPage} />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="FOOTER BLOCK">
          <AdminFooterBlockSupport />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <MetaTagsBlock theme="dark" sitemap="services/it-support" />
    </div>
  );
};

export default ServiceSupportContentBlock;
