import React from "react";
import { List } from "../../components/CV/List/List";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { ICvResponse } from "../../types/Admin/AdminCv.types";
import { adminCvService } from "../../services/adminCvPage";

const DevsInfo = () => {
  const { data }: ICvResponse = useQuery(
    [queryKeys.getPaginatedAndFilteredCvs],
    () =>
      adminCvService.getPaginatedAndFilteredCvs("", "Peter Peterson", "", "")
  );

  console.log("Data: ", data);

  return 1;
  // return <List data={data} />;
};

export default DevsInfo;
