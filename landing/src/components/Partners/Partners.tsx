import Image from "next/image";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as StyledThisComp from "../../styles/HomePage/Partners.styled";
import { IDataResponse } from "../../types/Admin/Response.types";

const Partners = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.LogosBlock;

  return (
    <StyledThisComp.PartnersContainer>
      {data &&
        data?.images &&
        data?.images?.map((img, idx) => (
          <StyledThisComp.PartnerImageWrapper key={idx}>
            <Image
              src={img.url}
              alt="partner image"
              layout="fill"
              objectFit="contain"
            />
          </StyledThisComp.PartnerImageWrapper>
        ))}
    </StyledThisComp.PartnersContainer>
  );
};

export default Partners;
