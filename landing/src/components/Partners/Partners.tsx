import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as StyledThisComp from "../../styles/Partners.styled";
import { IDataResponse } from "../../types/Admin/Response.types";
import { partnersArr } from "../../utils/variables";
import ImagePreview from "../Image/ImagePreview";

const Partners = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  );

  return (
    <StyledThisComp.PartnersContainer>
      {partnersArr.map((item, idx) => (
        <StyledThisComp.PartnerImageWrapper key={idx}> 
          <ImagePreview // here
            src={item}
            placeholder={"blur"}
            alt={"alt partners image"}
          />
        </StyledThisComp.PartnerImageWrapper>
      ))}
    </StyledThisComp.PartnersContainer>
  );
};

export default Partners;
