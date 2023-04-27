import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IPortfolioReviewsResponse } from "../../types/Admin/AdminPortfolio.types";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminPortfolioService } from "../../services/adminPortfolioPage";

const PortfolioProjectPage = () => {
  const [projectId, setProjectId] = useState<string>("");

  const router = useRouter();

  const { data, isLoading } = useQuery(
    [queryKeys.getPortfolioProjectPage],
    () => adminPortfolioService.getReviews()
  );

  useEffect(() => {
    setProjectId(router.query.projectId as string);
  }, [router.query]);

  return <div>wsup</div>;
};

export default PortfolioProjectPage;
