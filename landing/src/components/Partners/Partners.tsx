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
      {data &&
        data.images.map((img, idx) => (
          <StyledThisComp.PartnerImageWrapper key={idx}>
            <ImagePreview
              src={img.url}
              alt={"alt partners image"}
              layout="fill"
              objectFit={"contain"}
            />
          </StyledThisComp.PartnerImageWrapper>
        ))}
    </StyledThisComp.PartnersContainer>
  );
};

export default Partners;
