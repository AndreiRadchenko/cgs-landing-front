import React from "react";
import { useFormikContext } from "formik";

import { AdminBigButton, AdminPaddedBlock } from "../../../../styles/AdminPage";
import AdminBlockDropDown from "../../../Admin/Global/AdminBlockDropDown";
import MetaTagsBlock from "../../MetaTagsBlock";
import HeadBlock from "./HeadBlock";
import WhatDoWeDoBlock from "./WhatDoWeDoBlock";
import DesignBlock from "./DesignBlock";
import EssentialBlock from "./EssentialBlock";
import FooterBlock from "./FooterBlock";
import ServiceShowCase from "../../ServiceShowCase";
import TeamMembers from "../../../ServisesComponents/TeamMembers/AdminTeamMembers";
import OtherServices from "../../../ServisesComponents/OtherServices/AdminComponent";
import { queryKeys } from "../../../../consts/queryKeys";

const ServiceUxUiContentBlock = () => {
  const { handleSubmit } = useFormikContext();

  return (
    <div>
      <HeadBlock />
      <WhatDoWeDoBlock />
      <DesignBlock />
      <EssentialBlock />
      <ServiceShowCase />
      <TeamMembers />
      <AdminPaddedBlock style={{ margin: "-3em 0 0", paddingTop: "0" }}>
        <AdminBlockDropDown title="OTHER SERVICES">
          <OtherServices queryKey={queryKeys.getServiceUxUiPage} />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
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
