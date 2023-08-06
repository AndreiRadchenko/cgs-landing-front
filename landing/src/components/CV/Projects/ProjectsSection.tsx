import React from "react";

import { Project } from "./Project/Project";

import * as Styled from "./ProjectsSection.styled";
import { CvData } from "../../../types/Admin/AdminCv.types";

interface IProps {
  data: CvData;
}

export const ProjectsSection = ({
  data: {
    projects: { title, project },
  },
}: IProps) => {
  return (
    <>
      <Styled.Title>{title}:</Styled.Title>
      {project.map((e, idx) => (
        <Project {...e} idx={idx} key={idx} />
      ))}
    </>
  );
};
