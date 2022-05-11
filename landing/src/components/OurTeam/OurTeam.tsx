import React from "react";
import * as StyledThisComp from "../../styles/OurTeam.styled";
import OurTeamCard from "./OurTeamCard";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";

const OurTeam = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.CorporateBlock;

  return (
    <StyledThisComp.OurTeamContainer>
      <StyledThisComp.OurTeamRow>
        {data?.blocks.map(({ subtitle, text }, idx) => (
          <OurTeamCard
            key={subtitle}
            url={data.images[idx].image?.url}
            title={subtitle}
            description={text}
          />
        ))}
      </StyledThisComp.OurTeamRow>
    </StyledThisComp.OurTeamContainer>
  );
};

export default OurTeam;
