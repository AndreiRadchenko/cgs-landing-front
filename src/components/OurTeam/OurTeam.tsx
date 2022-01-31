import React from "react";
import * as StyledThisComp from "../../styles/OurTeam.styled";
import { ourTeamArr } from "../../utils/variables";
import OurTeamCard from "./OurTeamCard";
import decorationClipIMG from "../../../public/clip.png";
import ImagePreview from "../Image/ImagePreview";

const OurTeam = () => {
  return (
    <StyledThisComp.OurTeamContainer>
      <StyledThisComp.DecorationClipIconLeft>
        <ImagePreview
          src={decorationClipIMG}
          placeholder="blur"
          alt={"alt clip image icon left"}
        />
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
        <ImagePreview
          src={decorationClipIMG}
          alt={"alt clip image icon right"}
          placeholder="blur"
        />
      </StyledThisComp.DecorationClipIconRight>
    </StyledThisComp.OurTeamContainer>
  );
};

export default OurTeam;
