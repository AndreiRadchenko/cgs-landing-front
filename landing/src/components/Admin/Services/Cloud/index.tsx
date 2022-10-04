import React from "react";
import { useFormikContext } from "formik";
import { AdminBigButton, AdminPaddedBlock } from "../../../../styles/AdminPage";
import MetaTagsBlock from "../../MetaTagsBlock";
import HeadBlock from "./HeadBlock";
import WorthBlock from "./WorthBlock";
import ProvidesBlock from "./ProvidesBlock";
import WorkBlock from "./WorkBlock";
import FooterBlock from "./FooterBlock";
// import ServiceShowCase from "../../ServiceShowCase";

const ServiceCloudContentBlock = () => {
  const { handleSubmit } = useFormikContext();

  return (
    <div>
      <HeadBlock />
      <WorthBlock />
      <ProvidesBlock />
      {/* <ServiceShowCase /> */}
      <WorkBlock />
      <FooterBlock />
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
