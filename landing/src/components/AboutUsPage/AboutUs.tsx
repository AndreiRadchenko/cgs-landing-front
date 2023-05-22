import React from "react";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useQueryClient } from "@tanstack/react-query";

import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import linkedInLocal from "../../../public/linkedIn.svg";

import * as Styled from "./AboutUs.styled";
import { IAbout, IDataResponse } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";

interface IAboutUs {
  data: IAbout;
}

interface IString {
  text: string;
}

const ParsedText = ({ text }: IString) => {
  const textArray = text.split("|");
  return (
    <>
      {textArray.map((e: string, i: number) => (
        <p key={i}>{e}</p>
      ))}
    </>
  );
};

const AboutUs = ({ data }: IAboutUs) => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const {
    about: { video, image, codex, philosophy },
    numbers: { years, employees, projects, customers },
    team: { title, members },
  } = data;

  const queryClient = useQueryClient();
  const footerData = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.FooterBlock;
  const linkedInIcon = footerData?.images[2].image?.url;

  return (
    <>
      <Styled.HeroAboutContainer>
        <video
          loop
          playsInline
          muted
          autoPlay
          poster={data && image ? image.url : ""}
          disablePictureInPicture
          preload="auto"
        >
          <source
            src={data && video?.image ? video.image.url : ""}
            type="video/mp4"
          />
        </video>
      </Styled.HeroAboutContainer>
      <Styled.Layout>
        <Styled.HeadlinesContainer>
          <Styled.HeadlineContainer>
            {!isMobile ? (
              <Styled.Subtitle>{codex.title}</Styled.Subtitle>
            ) : (
              <MobileInfiniteText title={codex.title} />
            )}
            <Styled.Text>
              <ParsedText text={codex.text} />
            </Styled.Text>
          </Styled.HeadlineContainer>
          <Styled.HeadlineContainer>
            {!isMobile ? (
              <Styled.Subtitle>{philosophy.title}</Styled.Subtitle>
            ) : (
              <MobileInfiniteText title={philosophy.title} />
            )}
            <Styled.Text>
              <ParsedText text={philosophy.text} />
            </Styled.Text>
          </Styled.HeadlineContainer>
        </Styled.HeadlinesContainer>
        <Styled.NumbersContainer>
          <Styled.Achievement>
            <Styled.AchievementNumber>{years.num}</Styled.AchievementNumber>
            <Styled.AchievementText>{years.text}</Styled.AchievementText>
          </Styled.Achievement>
          <Styled.Achievement>
            <Styled.AchievementNumber>{employees.num}</Styled.AchievementNumber>
            <Styled.AchievementText>{employees.text}</Styled.AchievementText>
          </Styled.Achievement>
          <Styled.Achievement>
            <Styled.AchievementNumber>{projects.num}</Styled.AchievementNumber>
            <Styled.AchievementText>{projects.text}</Styled.AchievementText>
          </Styled.Achievement>
          <Styled.Achievement>
            <Styled.AchievementNumber>{customers.num}</Styled.AchievementNumber>
            <Styled.AchievementText>{customers.text}</Styled.AchievementText>
          </Styled.Achievement>
        </Styled.NumbersContainer>
        <Styled.OurTeamContainer>
          {!isMobile ? (
            <Styled.Subtitle>{title}</Styled.Subtitle>
          ) : (
            <MobileInfiniteText title={title} />
          )}
          <Styled.TeamGallery>
            {members.map((member, index) => (
              <Styled.Teammate key={index}>
                <Styled.TeammateImageContainer>
                  <Image
                    src={member?.image?.url ? member.image.url : ""}
                    alt="teammate image"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="top"
                  />
                  <Styled.LinkedIn
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      priority
                      src={linkedInIcon ? linkedInIcon : linkedInLocal}
                      alt="Link to LinkedIn"
                      width={32}
                      height={32}
                    />
                  </Styled.LinkedIn>
                </Styled.TeammateImageContainer>
                <Styled.TeammateName>{member.name}</Styled.TeammateName>
                <Styled.TeammatePosition>
                  {member.position}
                </Styled.TeammatePosition>
                <Styled.TeammateAbout>
                  <ParsedText text={member.about} />
                </Styled.TeammateAbout>
              </Styled.Teammate>
            ))}
          </Styled.TeamGallery>
        </Styled.OurTeamContainer>
      </Styled.Layout>
    </>
  );
};

export default AboutUs;
