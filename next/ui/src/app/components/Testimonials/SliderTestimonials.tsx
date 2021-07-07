import { ITestimonial } from "types/components";

import { Slider } from "../Slider";

import Testimonials from "./Testimonials.component";

export interface ProjectsSliderProps {
  testimonials: ITestimonial[];
}

const TestimonialsSlider: React.FC<ProjectsSliderProps> = ({ testimonials }) => {
  return (
    <Slider
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
      items={testimonials}
      renderItem={(testimonial) => (
        <Testimonials testimonial={testimonial} />
      )}
    />
  );
};

export default TestimonialsSlider;
