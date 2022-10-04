import React from "react";
import { useFormikContext } from "formik";
import { AdminBigButton, AdminPaddedBlock } from "../../../../styles/AdminPage";
import MetaTagsBlock from "../../MetaTagsBlock";
import HeadBlock from "./HeadBlock";
import WhatDoWeDoBlock from "./WhatDoWeDoBlock";
import DesignBlock from "./DesignBlock";
import EssentialBlock from "./EssentialBlock";
import FooterBlock from "./FooterBlock";
// import ServiceShowCase from "../../ServiceShowCase";

const ServiceUxUiContentBlock = () => {
  const { handleSubmit } = useFormikContext();

  return (
    <div>
      <HeadBlock />
      <WhatDoWeDoBlock />
      <DesignBlock />
      {/* <ServiceShowCase /> */}
      <EssentialBlock />
      <FooterBlock />
      <MetaTagsBlock theme="dark" sitemap="services/ux-ui-design" />
      <AdminPaddedBlock>
        <AdminBigButton type="submit" onClick={() => handleSubmit()}>
          Save changes
        </AdminBigButton>
      </AdminPaddedBlock>
    </div>
  );
};

export default ServiceUxUiContentBlock;
