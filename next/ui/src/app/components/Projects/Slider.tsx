import { IProject } from "types/components";

import { Slider } from "../Slider";

import { Project } from "./Project";

export interface ProjectsSliderProps {
  projects: IProject[];
}

export const ProjectsSlider: React.FC<ProjectsSliderProps> = ({ projects }) => {
  return (
    <Slider
      items={projects}
      renderItem={(project) => (
        <Project project={project} />
      )}
    />
  );
};
