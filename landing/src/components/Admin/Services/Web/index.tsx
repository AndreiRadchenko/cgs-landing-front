import { useFormikContext } from "formik";
import React from "react";
import { AdminBigButton, AdminPaddedBlock } from "../../../../styles/AdminPage";
import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import ComparisonBlock from "./ComparisonBlock";
import FooterBlock from "./FooterBlock";
import MainBlock from "./MainBlock";
import SolutionBlock from "./SolutionBlock";
import WhyIsWebBlock from "./WhyIsWebBlock";
import FreeServices from "../../../ServisesComponents/FreeServices/AdminComponent";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import TeamMembers from "../../../ServisesComponents/TeamMembers/AdminTeamMembers";

const ServiceMobileContentBlock = () => {
  const { handleSubmit } = useFormikContext();
  return (
    <div>
      <AdminPaddedBlock>
        <AdminBlockDropDown title="Head Block">
          <MainBlock />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <AdminPaddedBlock>
        <AdminBlockDropDown title="Comparison Block">
          <ComparisonBlock />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <AdminPaddedBlock>
        <AdminBlockDropDown title="Why Is Web Block">
          <WhyIsWebBlock />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <AdminPaddedBlock>
        <AdminBlockDropDown title="Solution Block">
          <SolutionBlock />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <AdminPaddedBlock>
        <AdminBlockDropDown title="Service ShowCase">
          <ServiceShowCase />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <AdminPaddedBlock>
        <AdminBlockDropDown title="FREE SERVICES">
          <FreeServices />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <AdminPaddedBlock>
        <AdminBlockDropDown title="TEAM MEMBERS">
          <TeamMembers />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <AdminPaddedBlock>
        <AdminBlockDropDown title="Footer block">
          <FooterBlock />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <MetaTagsBlock theme="dark" sitemap="services/web-development" />
      <AdminPaddedBlock>
        <AdminBigButton type="submit" onClick={() => handleSubmit()}>
          Save changes
        </AdminBigButton>
      </AdminPaddedBlock>
    </div>
  );
};

export default ServiceMobileContentBlock;
