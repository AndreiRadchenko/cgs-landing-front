import React, { FC } from "react";
import * as StyledThisComp from "../../styles/OurTeam.styled";
import Image from "next/image";

interface IOurTeamCardProps {
  url: any;
  title: string;
  description: string;
}

const OurTeamCard: FC<IOurTeamCardProps> = ({ url, title, description }) => {
  return (
    <StyledThisComp.OurTeamCardContainer>
      <Image
        src={url}
        alt={`our team ${title} img`}
        quality={100}
        layout={"fixed"}
        objectFit={"cover"}
      />
      <StyledThisComp.OurTeamCardContent>
        <StyledThisComp.OurTeamCardTitle>
          {title}:
        </StyledThisComp.OurTeamCardTitle>
        <StyledThisComp.DecorationTextTitle
          className={`${title.split(" ").reverse()[0]}`}
        />
        <StyledThisComp.OurTeamCardDescription>
          {description}
        </StyledThisComp.OurTeamCardDescription>
      </StyledThisComp.OurTeamCardContent>
    </StyledThisComp.OurTeamCardContainer>
  );
};

export default OurTeamCard;
