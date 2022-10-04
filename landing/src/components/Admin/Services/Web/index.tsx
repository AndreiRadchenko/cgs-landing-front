import { useFormikContext } from "formik";
import React from "react";
import { AdminBigButton, AdminPaddedBlock } from "../../../../styles/AdminPage";
import MetaTagsBlock from "../../MetaTagsBlock";
// import ServiceShowCase from "../../ServiceShowCase";
import ComparisonBlock from "./ComparisonBlock";
import FooterBlock from "./FooterBlock";
import MainBlock from "./MainBlock";
import PerksBlock from "./PerksBlock";
import SolutionBlock from "./SolutionBlock";
import WhyIsWebBlock from "./WhyIsWebBlock";

const ServiceMobileContentBlock = () => {
  const { handleSubmit } = useFormikContext();
  return (
    <div>
      <MainBlock />
      <ComparisonBlock />
      <WhyIsWebBlock />
      <SolutionBlock />
      {/* <ServiceShowCase /> */}
      <PerksBlock />
      <FooterBlock />
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
