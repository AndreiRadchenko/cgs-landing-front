import { IWorker } from "types/components";

import { Slider } from "../Slider";

import AboutUs from "./AboutUs.component";

export interface ProjectsSliderProps {
  workers: IWorker[];
}

const AboutUsSlider: React.FC<ProjectsSliderProps> = ({ workers }) => {
  return (
    <Slider
      items={workers}
      renderItem={(employee) => (
        <AboutUs employee={employee} />
      )}
      swiperOptions={{
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      }}
    />
  );
};

export default AboutUsSlider;
