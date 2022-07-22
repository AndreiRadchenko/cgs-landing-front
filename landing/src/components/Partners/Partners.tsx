import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as StyledThisComp from "../../styles/Partners.styled";
import { IDataResponse } from "../../types/Admin/Response.types";
import ImagePreview from "../Image/ImagePreview";

const Partners = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.LogosBlock;

  return (
    <StyledThisComp.PartnersContainer>
      The next-gen tech: Web, mobile, blockchain
    </StyledThisComp.PartnersContainer>
  );
};

export default Partners;
