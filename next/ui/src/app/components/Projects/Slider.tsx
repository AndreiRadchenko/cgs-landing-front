import { IProject } from "types/components";

import { Slider } from "../Slider";

import { Project } from "./Project";

import * as Styled from "./Slider.styles";

export interface ProjectsSliderProps {
  projects: IProject[];
}

export const ProjectsSlider: React.FC<ProjectsSliderProps> = ({ projects }) => {
  return (
    <Styled.Container>
      <Slider
        items={projects}
        renderItem={(project) => (
          <Project project={project} />
        )}
      />
    </Styled.Container>
  );
};
