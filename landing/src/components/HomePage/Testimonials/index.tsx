import React, { useState } from "react";

import TestimonialsModal from "./TestimonialsModal";
import TestimonialsSlide from "./TestimonialsSlide";

import * as Styled from "../../../styles/HomePage/Testimonials.styled";

const Testimonials = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Styled.TestimonialsTitle>Testimonials:</Styled.TestimonialsTitle>
      <div style={{ marginTop: "24px" }}>
        <TestimonialsSlide setIsOpen={setIsOpen} />
      </div>
      {isOpen && <TestimonialsModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Testimonials;
