import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as StyledThisComp from "../../styles/HomePage/Partners.styled";
import { IDataResponse } from "../../types/Admin/Response.types";
import PartnersImage from "./PartnersImage";

const Partners = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.LogosBlock;

  return (
    <StyledThisComp.PartnersContainer>
      {data &&
        data?.images &&
        data?.images?.map((img, idx) => <PartnersImage key={idx} img={img} />)}
    </StyledThisComp.PartnersContainer>
  );
};

export default Partners;
