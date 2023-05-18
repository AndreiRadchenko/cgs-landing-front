import React from "react";
import parse from "html-react-parser";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Layout } from "../../styles/Layout.styled";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import LinkedIn from "../../../public/linkedIn.svg";

import * as Styled from "./AboutUs.styled";
import { IAbout } from "../../types/Admin/Response.types";

interface IAboutUs {
  data: IAbout;
}

const AboutUs = ({ data }: IAboutUs) => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const {
    about: { image, codex, philosophy },
    numbers: { years, employees, projects, customers },
    team: { title, members },
  } = data;

  return (
    <>
      <Styled.HeroAboutContainer>
        <Image
          src={data ? image.url : ""}
          alt="about hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="right"
        />
      </Styled.HeroAboutContainer>
      <Layout>
        <Styled.HeadlinesContainer>
          <Styled.HeadlineContainer>
            {!isMobile ? (
              <Styled.Subtitle>{codex.title}</Styled.Subtitle>
            ) : (
              <MobileInfiniteText title={codex.title} />
            )}
            <Styled.Text>{codex.text}</Styled.Text>
          </Styled.HeadlineContainer>
          <Styled.HeadlineContainer>
            {!isMobile ? (
              <Styled.Subtitle>{philosophy.title}</Styled.Subtitle>
            ) : (
              <MobileInfiniteText title={philosophy.title} />
            )}
            <Styled.Text>{philosophy.text}</Styled.Text>
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
                    src={data ? member.image.url : ""}
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
                    <Image priority src={LinkedIn} alt="Link to LinkedIn" />
                  </Styled.LinkedIn>
                </Styled.TeammateImageContainer>
                <Styled.TeammateName>{member.name}</Styled.TeammateName>
                <Styled.TeammatePosition>
                  {member.position}
                </Styled.TeammatePosition>
                <Styled.TeammateAbout>{member.about}</Styled.TeammateAbout>
              </Styled.Teammate>
            ))}
          </Styled.TeamGallery>
        </Styled.OurTeamContainer>
      </Layout>
    </>
  );
};

export default AboutUs;
