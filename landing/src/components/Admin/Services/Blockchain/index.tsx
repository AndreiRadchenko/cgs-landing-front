import React from "react";
import { useFormikContext } from "formik";
import { AdminBigButton, AdminPaddedBlock } from "../../../../styles/AdminPage";
import MetaTagsBlock from "../../MetaTagsBlock";
import HeadBlock from "./HeadBlock";
import ServicesBlock from "./ServicesBlock";
import WayBlock from "./WayBlock";
import AboutBlock from "./AboutBlock";
import FooterBlock from "./FooterBlock";

const ServiceBlockchainContentBlock = () => {
  const { handleSubmit } = useFormikContext();

  return (
    <div>
      <HeadBlock />
      <ServicesBlock />
      <WayBlock />
      <AboutBlock />
      <FooterBlock />
      <MetaTagsBlock theme="dark" />
      <AdminPaddedBlock>
        <AdminBigButton type="submit" onClick={() => handleSubmit()}>
          SaveChanges
        </AdminBigButton>
      </AdminPaddedBlock>
    </div>
  );
};

export default ServiceBlockchainContentBlock;
