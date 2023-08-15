import { useState } from "react";
import { useFormikContext } from "formik";

import { IDataResponse } from "../types/Admin/Response.types";
import { ITestimonial } from "../types/Components.types";

const useTestimonialLogic = () => {
  const { values, handleSubmit } = useFormikContext<IDataResponse>();
  const [testimonial, setTestimonial] = useState(0);

  const submitFunction = (testimonial: ITestimonial) => {
    values.TestimonialsBlock.testimonials.push(testimonial);
  };

  const deleteFunction = (id: number) => {
    values.TestimonialsBlock.testimonials.splice(id, 1);
    setTestimonial(id > 0 ? id - 1 : 0);
    handleSubmit();
  };

  const editFunction = (value: ITestimonial) => {
    values.TestimonialsBlock.testimonials[testimonial] = value;
  };

  return {
    submitFunction,
    setTestimonial,
    testimonial,
    deleteFunction,
    editFunction,
  };
};

export default useTestimonialLogic;
