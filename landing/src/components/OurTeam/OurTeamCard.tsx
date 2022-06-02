import React, { FC, useState } from "react";
import * as StyledThisComp from "../../styles/OurTeam.styled";
import Image from "next/image";
import decorationClipIMG from "../../../public/clip.png";
import ImagePreview from "../Image/ImagePreview";
import { SplitBrackets } from "../../utils/splitBrackets";

interface IOurTeamCardProps {
  url: any;
  title: string;
  description: string;
}

const OurTeamCard: FC<IOurTeamCardProps> = ({ url, title, description }) => {
  const [isClicked, setIsCliked] = useState<boolean>(false);

  const playAnimation = (animationDuration: number) => {
    setIsCliked(true);
    setTimeout(() => {
      setIsCliked(false);
    }, animationDuration);
  };

  const handleRightClipClick = () => {
    playAnimation(2500);
  };

  const handleLeftClipClick = () => {
    playAnimation(2000);
  };

  return (
    <>
      <StyledThisComp.ImageWrapper
        className={title.split(" ").join("-") + "-img"}
      >
        <Image
          src={url}
          alt={`our team ${title} img`}
          quality={100}
          priority
          layout={"fill"}
          objectFit={"contain"}
          className={title.split(" ").join("-") + "-img"}
        />

        {title === "our main goal" ? (
          <StyledThisComp.DecorationClipIconLeft
            className={isClicked ? "animate" : undefined}
            onClick={!isClicked ? handleLeftClipClick : undefined}
          >
            <ImagePreview
              src={decorationClipIMG}
              placeholder="blur"
              alt={"alt clip image icon left"}
            />
          </StyledThisComp.DecorationClipIconLeft>
        ) : (
          <StyledThisComp.DecorationClipIconRight
            className={isClicked ? "animate" : undefined}
            onClick={!isClicked ? handleRightClipClick : undefined}
          >
            <ImagePreview
              src={decorationClipIMG}
              alt={"alt clip image icon right"}
              placeholder="blur"
            />
          </StyledThisComp.DecorationClipIconRight>
        )}
      </StyledThisComp.ImageWrapper>

      <StyledThisComp.OurTeamCardContent
        className={title.split(" ").join("-") + "-content"}
      >
        <StyledThisComp.OurTeamCardTitle>
          <SplitBrackets text={`${title}:`} />
          <StyledThisComp.DecorationTextTitle
            className={`${title.split(" ").reverse()[0]}`}
          />
        </StyledThisComp.OurTeamCardTitle>

        <StyledThisComp.OurTeamCardDescription>
          <SplitBrackets text={description} />
        </StyledThisComp.OurTeamCardDescription>
      </StyledThisComp.OurTeamCardContent>
    </>
  );
};

export default OurTeamCard;
