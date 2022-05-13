import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { NotFoundPage } from "../src/app/components/NotFoundPage";
import { Maintenance } from "../src/app/containers/MaintenancePage";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  });

  return <Maintenance />;
};

export default NotFound;
