import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";

const DynamicReactJson = dynamic(() => import("react-json-view"), {
  ssr: false,
});

import { adminHistoryService } from "../../../services/history";

interface ISection {
  [key: string]: any;
}

interface IHistoryRecords {
  d: ISection;
  t: string;
}

interface IData {
  data: IHistoryRecords[] | undefined;
  isLoading: boolean;
  isSuccess: boolean;
}

const HistoryPage = () => {
  const router = useRouter();
  const { page, section } = router.query;

  const { data }: IData = useQuery([page], () =>
    adminHistoryService.getHistory(`${page}/${section}`)
  );

  return (
    <div style={{ marginInline: "50px", color: "darkslategray" }}>
      <h1>{page} page</h1>
      <h2 style={{}}>{section} section history</h2>
      {typeof data !== "undefined" &&
        data.map(
          (record, idx) =>
            section &&
            typeof section === "string" && (
              <div
                key={idx}
                style={{
                  backgroundColor: idx % 2 ? "" : "white",
                  marginInline: "-50px",
                  paddingInline: "50px",
                  paddingBlock: "5px",
                }}
              >
                {typeof window !== "undefined" && data ? (
                  <DynamicReactJson src={record.d[section]} />
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            )
        )}
    </div>
  );
};

export default HistoryPage;
