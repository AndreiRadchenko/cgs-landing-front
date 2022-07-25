import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as StyledThisComp from "../../styles/Partners.styled";
import { IDataResponse } from "../../types/Admin/Response.types";

const Partners = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.LogosBlock;

  return (
    <StyledThisComp.PartnersContainer>
      {/*{data &&*/}
      {/*  data.images.map((img, idx) => (*/}
      {/*    <StyledThisComp.PartnerImageWrapper key={idx}>*/}
      {/*      <img src={img.url} />*/}
      {/*    </StyledThisComp.PartnerImageWrapper>*/}
      {/*  ))}*/}
    </StyledThisComp.PartnersContainer>
  );
};

export default Partners;
