import { useFormikContext } from "formik";
import React from "react";
import { AdminBigButton, AdminPaddedBlock } from "../../../../styles/AdminPage";
import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import BonusesBlock from "./BonusesBlock";
import FooterBlock from "./FooterBlock";
import MainBlock from "./MainBlock";
import ProvideBlock from "./ProvideBlock";
import SubtitleBlock from "./SubtitleBlock";

const ServiceSupportContentBlock = () => {
  const { handleSubmit } = useFormikContext();
  return (
    <div>
      <MainBlock />
      <SubtitleBlock />
      <ProvideBlock />
      <ServiceShowCase />
      <BonusesBlock />
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

export default ServiceSupportContentBlock;
