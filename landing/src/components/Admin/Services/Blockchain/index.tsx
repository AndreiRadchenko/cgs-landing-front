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

const ServiceBlockchainContentBlock = () => {
  const { handleSubmit } = useFormikContext();

  return (
    <div>
      <HeadBlock />
      <ServicesBlock />
      <WayBlock />
      <Advantages />
      <TeamMembers />
      <ServiceShowCase />
      <AboutBlock />
      <div style={{ marginInline: "40px" }}>
        <BlockDropdown title={"Why it's worth it?"}>
          <WhoNeedApps />
        </BlockDropdown>
      </div>
      <FooterBlock />
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
