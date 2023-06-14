import React from "react";
import { useFormikContext } from "formik";

import {
  AdminBigButton,
  AdminPaddedBlock,
  AdminHeader,
} from "../../../../styles/AdminPage";
import AdminBlockDropDown from "../../../Admin/Global/AdminBlockDropDown";
import MetaTagsBlock from "../../MetaTagsBlock";
import HeadBlock from "./HeadBlock";
import WorthBlock from "./WorthBlock";
import ProvidesBlock from "./ProvidesBlock";
import FooterBlock from "./FooterBlock";
import ServiceShowCase from "../../ServiceShowCase";
import TeamMembers from "../../../ServisesComponents/TeamMembers/AdminTeamMembers";
import FreeServices from "../../../ServisesComponents/FreeServices/AdminComponent";

const ServiceCloudContentBlock = () => {
  const { handleSubmit } = useFormikContext();

  return (
    <div>
      <AdminPaddedBlock>
        <AdminHeader>CLOUD SOLUTIONS</AdminHeader>
        <AdminBlockDropDown title="HEAD BLOCK">
          <HeadBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="TEAM PROVIDES">
          <ProvidesBlock />
        </AdminBlockDropDown>
      </AdminPaddedBlock>

      <div style={{ marginTop: "-3.8em" }}>
        <ServiceShowCase />
      </div>
      <div style={{ marginInline: "40px" }}>
        <AdminBlockDropDown title={"Why it's worth it?"}>
          <WorthBlock />
        </AdminBlockDropDown>
      </div>
      <AdminPaddedBlock>
        <AdminBlockDropDown title="TEAM MEMBERS">
          <TeamMembers />
        </AdminBlockDropDown>
      </AdminPaddedBlock>

      <AdminPaddedBlock style={{ margin: "-3em 0 0", paddingTop: "0" }}>
        <AdminBlockDropDown title="FREE SERVICES">
          <FreeServices />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="FOOTER BLOCK">
          <FooterBlock />
        </AdminBlockDropDown>
      </AdminPaddedBlock>

      <MetaTagsBlock theme="dark" sitemap="services/cloud-solutions" />
      <AdminPaddedBlock>
        <AdminBigButton type="submit" onClick={() => handleSubmit()}>
          Save changes
        </AdminBigButton>
      </AdminPaddedBlock>
    </div>
  );
};

export default ServiceCloudContentBlock;
