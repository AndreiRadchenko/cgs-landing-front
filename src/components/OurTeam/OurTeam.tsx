import React from "react";
import * as StyledThisComp from "../../styles/OurTeam.styled";
import { ourTeamArr } from "../../utils/variables";
import OurTeamCard from "./OurTeamCard";
import Image from "next/image";
import decorationClipIMG from "../../../public/clip-icon.svg";

const OurTeam = () => {
  return (
    <StyledThisComp.OurTeamContainer>
      <StyledThisComp.DecorationClipIconLeft>
        <Image src={decorationClipIMG} alt={"alt clip image icon left"} />
      </StyledThisComp.DecorationClipIconLeft>

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

      <StyledThisComp.DecorationClipIconRight>
        <Image src={decorationClipIMG} alt={"alt clip image icon right"} />
      </StyledThisComp.DecorationClipIconRight>
    </StyledThisComp.OurTeamContainer>
  );
};

export default OurTeam;
