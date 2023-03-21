import React from "react";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";

import * as Styled from "../../../styles/AdminPage";
import { adminRateCardService } from "../../../services/adminRateCard";
import { IRateCardResponse } from "../../../types/Admin/AdminRateCard.types";

const RateCardMainContent = () => {
  const { data, isLoading, refetch }: IRateCardResponse = useQuery(
    [queryKeys.getRateCardData],
    () => adminRateCardService.getCards()
  );

  if (isLoading) {
    return (
      <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
    );
  }

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHeader>Rate Card</Styled.AdminHeader>
    </Styled.AdminPaddedBlock>
  );
};

export default RateCardMainContent;
