import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as StyledThisComp from "../../styles/HomePage/Partners.styled";
import { IDataResponse } from "../../types/Admin/Response.types";
import PartnersImage from "./PartnersImage";

const Partners = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.LogosBlock;

  
  return (
    <StyledThisComp.PartnersContainer>
      {data &&
        data.images.normal.map((img, idx) => (
          <StyledThisComp.PartnerImageWrapper key={idx}>
            <PartnersImage img={img.url} idx={idx} />
          </StyledThisComp.PartnerImageWrapper>
        ))}
    </StyledThisComp.PartnersContainer>
  );
};

export default Partners;
