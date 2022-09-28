import { useFormikContext } from "formik";
import React from "react";
import { AdminBigButton, AdminPaddedBlock } from "../../../../styles/AdminPage";
import MetaTagsBlock from "../../MetaTagsBlock";
import MainBlock from "./MainBlock";
import ExpertiseBlock from "./ExpertiseBlock";
import FooterBlock from "./FooterBlock";
import SelectBlock from "./SelectBlock";
import FeaturesBlock from "./FeaturesBlock";
import ServiceShowCase from "../../ServiceShowCase";

const ServiceDbContentBlock = () => {
  const { handleSubmit } = useFormikContext();
  return (
    <div>
      <MainBlock />
      <ExpertiseBlock />
      <SelectBlock />
      <ServiceShowCase />
      <FeaturesBlock />
      <FooterBlock />
      <MetaTagsBlock theme="dark" />
      <AdminPaddedBlock>
        <AdminBigButton type="submit" onClick={() => handleSubmit()}>
          Save changes
        </AdminBigButton>
      </AdminPaddedBlock>
    </div>
  );
};

export default ServiceDbContentBlock;
