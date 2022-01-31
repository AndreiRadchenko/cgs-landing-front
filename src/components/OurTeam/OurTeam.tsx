import React from "react";
import * as StyledThisComp from "../../styles/OurTeam.styled";
import { ourTeamArr } from "../../utils/variables";
import OurTeamCard from "./OurTeamCard";


const OurTeam = () => {
  return (
    <StyledThisComp.OurTeamContainer>

      <StyledThisComp.OurTeamRow>
        {ourTeamArr.map(({ url, title, description }) => (
          <OurTeamCard
            key={title}
            url={url}
            title={title}
            description={description}
          />
        ))}
      </StyledThisComp.OurTeamRow>

    </StyledThisComp.OurTeamContainer>
  );
};

export default OurTeam;
