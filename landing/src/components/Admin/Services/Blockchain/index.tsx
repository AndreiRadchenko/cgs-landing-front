import React from "react";
import { useFormikContext } from "formik";
import { AdminBigButton, AdminPaddedBlock } from "../../../../styles/AdminPage";
import MetaTagsBlock from "../../MetaTagsBlock";
import HeadBlock from "./HeadBlock";
import ServicesBlock from "./ServicesBlock";
import WayBlock from "./WayBlock";
import AboutBlock from "./AboutBlock";
import FooterBlock from "./FooterBlock";
import ServiceShowCase from "../../ServiceShowCase";
import BlockDropdown from "../../BlockDropdown";
import WhoNeedApps from "../Mobile/WhoNeedApps";
import Advantages from "../../../ServisesComponents/Advantages/AdminAdvantages";
import TeamMembers from "../../../ServisesComponents/TeamMembers/AdminTeamMembers";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";

const ServiceBlockchainContentBlock = () => {
  const { handleSubmit } = useFormikContext();

  return (
    <div>
      <AdminPaddedBlock>
        <AdminBlockDropDown title="HEAD BLOCK">
          <HeadBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="SERVICES BLOCK">
          <ServicesBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="WAY BLOCK">
          <WayBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="TEAM MEMBERS">
          <TeamMembers />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="BLOCK OUR WORK">
          <ServiceShowCase />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="ADVANTAGES">
          <Advantages />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="WHO NEED APPS BLOCK">
          <WhoNeedApps />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="FOOTER BLOCK">
          <FooterBlock />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <MetaTagsBlock theme="dark" sitemap="services/blockchain" />
      <AdminPaddedBlock>
        <AdminBigButton type="submit" onClick={() => handleSubmit()}>
          SaveChanges
        </AdminBigButton>
      </AdminPaddedBlock>
    </div>
  );
};

export default ServiceBlockchainContentBlock;
