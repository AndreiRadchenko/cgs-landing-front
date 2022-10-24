import React from "react";
import { AdminBlocksContent } from "../../../../styles/AdminPage";
import HeaderBlock from "./HeaderBlock";
import TeamProvides from "./TeamProvides";
import WhatAppBlock from "./WhatAppBlock";

const ServiceMobileAuditContentBlock = () => {
  return (
    <AdminBlocksContent>
      <HeaderBlock />
      <WhatAppBlock />
      <TeamProvides />
    </AdminBlocksContent>
  );
};

export default ServiceMobileAuditContentBlock;
