import React from "react";
import Image from "next/image";

import { IProject } from "types/components";
import { addLineBreaks } from "helpers/addLineBreaks";

import countyCodes from "consts/countyCodes.json";

import { Link } from "./Link";
import { Technology } from "./Technology";

import * as Styled from "./Project.styles";

export interface ProjectProps {
  project: IProject;
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Styled.Container>
      <Styled.InfoContainer>
        <Styled.Header>
          <Styled.Name>{project.name}</Styled.Name>
          <Styled.FlagWrapper>
            <Styled.FlagContainer>
              <Image
                src={"https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/"+ project.countryCode.toLowerCase() +".svg"}
                width= "200"
                height= "150"
              />
            </Styled.FlagContainer>
            <Styled.Country>
              {countyCodes[project.countryCode] ?? project.countryCode}
            </Styled.Country>
          </Styled.FlagWrapper>
        </Styled.Header>
        <Styled.ShortDescription>{addLineBreaks(project.shortDescription)}</Styled.ShortDescription>
        <Styled.FullDescription>{addLineBreaks(project.fullDescription)}</Styled.FullDescription>
        <Styled.TechnologiesContainer>
          <Styled.TechnologiesWrapper>
            {project.technologies.map((technology) => (
              <Technology key={technology.id} technology={technology} />
            ))}
          </Styled.TechnologiesWrapper>
        </Styled.TechnologiesContainer>
        {project.link && <Link link={project.link} />}
      </Styled.InfoContainer>
      <Styled.ImageContainer>
        <Image
          src={project.image.url}
          alt={project.shortDescription}
          width={project.image.width}
          height={project.image.height}
          loading="eager"
        />
      </Styled.ImageContainer>
    </Styled.Container>
  );
};
