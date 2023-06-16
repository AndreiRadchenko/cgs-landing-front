﻿import { useFormikContext } from "formik";
import React from "react";
import { AdminBigButton, AdminPaddedBlock } from "../../../../styles/AdminPage";
import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import BonusesBlock from "./BonusesBlock";
import FooterBlock from "./FooterBlock";
import MainBlock from "./MainBlock";
import ProvideBlock from "./ProvideBlock";
import SubtitleBlock from "./SubtitleBlock";
import AdminBlockDropDown from "../../../Admin/Global/AdminBlockDropDown";
import Bonuses from "../../../ServisesComponents/Bonuses/AdminComponent";
import { queryKeys } from "../../../../consts/queryKeys";
import TeamMembers from "../../../ServisesComponents/TeamMembers/AdminTeamMembers";
import OtherServices from "../../../ServisesComponents/OtherServices/AdminComponent";

const ServiceSupportContentBlock = () => {
  const { handleSubmit } = useFormikContext();
  return (
    <div>
      <AdminPaddedBlock>
        <AdminBlockDropDown title="HEAD BLOCK">
          <MainBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="WHAT DO WE DO">
          <SubtitleBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="PROVIDE">
          <ProvideBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="SHOWCASE">
          <ServiceShowCase />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="BONUSES">
          <Bonuses queryKey={queryKeys.getServiceSupportPage} />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="TEAM MEMBERS">
          <TeamMembers />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="OTHER SERVICES">
          <OtherServices queryKey={queryKeys.getServiceSupportPage} />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="FOOTER BLOCK">
          <FooterBlock />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <MetaTagsBlock theme="dark" sitemap="services/it-support" />
      <AdminPaddedBlock>
        <AdminBigButton type="submit" onClick={() => handleSubmit()}>
          Save changes
        </AdminBigButton>
      </AdminPaddedBlock>
    </div>
  );
};

export default ServiceSupportContentBlock;
