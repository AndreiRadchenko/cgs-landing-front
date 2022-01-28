import React, { FC } from "react";
import * as StyledThisComp from "../../styles/OurTeam.styled";
import Image from "next/image";

interface IOurTeamCardProps {
  url: string;
  title: string;
  description: string;
}

const OurTeamCard: FC<IOurTeamCardProps> = ({ url, title, description }) => {
  return (
    <StyledThisComp.OurTeamCardContainer>
      <Image src={url} alt={`our team ${title} img`} quality={100} />
      <StyledThisComp.OurTeamCardContent>
        <StyledThisComp.OurTeamCardTitle>
          {title}:
          <StyledThisComp.DecorationTextTitle
          className={`${title.split(" ").reverse()[0]}`}
          />
        </StyledThisComp.OurTeamCardTitle>

        <StyledThisComp.OurTeamCardDescription>
          {description}
        </StyledThisComp.OurTeamCardDescription>
      </StyledThisComp.OurTeamCardContent>
    </StyledThisComp.OurTeamCardContainer>
  );
};

export default OurTeamCard;
