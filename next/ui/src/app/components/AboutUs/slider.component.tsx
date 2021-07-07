import { IWorker } from "types/components";

import { Slider } from "../Slider";

import AboutUs from "./AboutUs.component";

export interface ProjectsSliderProps {
  workers: IWorker[]
}

const AboutUsSlider: React.FC<ProjectsSliderProps> = ({ workers }) => {
  return (
    <Slider
      swiperOptions={{
        breakpoints: {
          1024: {
            enabled: false,
            slidesPerView: 3,
          },
        },
      }}
      items={workers}
      renderItem={(employee) => (
        <AboutUs employee={employee} />
      )}
    />
  );
};

export default AboutUsSlider;
