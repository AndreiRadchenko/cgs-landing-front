import { ITestimonial } from "types/components";

import { Slider } from "../Slider";

import Testimonials from "./Testimonials.component";

export interface ProjectsSliderProps {
  testimonials: ITestimonial[];
}

const TestimonialsSlider: React.FC<ProjectsSliderProps> = ({ testimonials }) => {
  return (
    <Slider
      items={testimonials}
      renderItem={(testimonial, index) => (
        <Testimonials testimonial={testimonial} />
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

export default TestimonialsSlider;
