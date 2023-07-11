import React from "react";

import { AdminPaddedBlock, AdminHeader } from "../../../../styles/AdminPage";
import AdminBlockDropDown from "../../../Admin/Global/AdminBlockDropDown";
import MetaTagsBlock from "../../MetaTagsBlock";
import MainBlock from "./MainBlock";
import FooterBlock from "./FooterBlock";
import SelectBlock from "./SelectBlock";
import FeaturesBlock from "./FeaturesBlock";
import ServiceShowCase from "../../ServiceShowCase";
import Bonuses from "../../../ServisesComponents/Bonuses/AdminComponent";
import OtherServices from "../../../ServisesComponents/OtherServices/AdminComponent";
import { queryKeys } from "../../../../consts/queryKeys";

const ServiceDbContentBlock = () => {
  return (
    <div>
      <AdminPaddedBlock>
        <AdminHeader>Db and Server solutions</AdminHeader>
        <AdminBlockDropDown title="Head block">
          <MainBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="Features block">
          <FeaturesBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="Select block">
          <SelectBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="Showcase">
          <ServiceShowCase />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="Bonuses component">
          <Bonuses queryKey={queryKeys.getServiceDbPage} />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="Other services">
          <OtherServices queryKey={queryKeys.getServiceDbPage} />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="Footer block">
          <FooterBlock />
        </AdminBlockDropDown>
      </AdminPaddedBlock>

      <MetaTagsBlock
        theme="dark"
        sitemap="services/database-and-server-solutions"
      />
    </div>
  );
};

export default ServiceDbContentBlock;
