import { ITestimonial } from "types/components";

import { Slider } from "../Slider";

import Testimonials from "./Testimonials.component";

import * as Styled from "./SliderTestimonials.styles";

export interface ProjectsSliderProps {
  testimonials: ITestimonial[];
}

const TestimonialsSlider: React.FC<ProjectsSliderProps> = ({
  testimonials,
}) => (
  <Styled.Container>
    <Slider
      items={testimonials}
      renderItem={(testimonial) => (
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
  </Styled.Container>
);

export default TestimonialsSlider;
