import React from "react";
import * as Styled from "./Testimonials.styles";
import { v4 as uuidv4 } from "uuid";
import Rating from "./rating/Rating";
import Image from "next/image"
import { addLineBreaks } from "helpers/addLineBreaks";

import countryCodes from "../../../consts/countyCodes.json";

const Testimonials = ({ testimonial }) => {
  const flagStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <Styled.TestimonialContainer key={uuidv4()}>
      <div className="titleWrapper">
        <h2>{testimonial?.customerName}</h2>
      </div>
      <div className="infoWrapper">
        {testimonial.countryCode && (
          <Styled.TestimonialFlag>
              <Image
                src={"https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/"+ testimonial.countryCode.toLowerCase() +".svg"}
                width= "200"
                height= "150"
                loading="lazy"
              />
          </Styled.TestimonialFlag>
        )}
        <p className="testimonials__country">{countryCodes[testimonial.countryCode]}</p>
      </div>
      <p className="testimonials__company">{testimonial?.companyName}</p>
      <Styled.TestimonialPosition>
        {testimonial?.customerPosition}
      </Styled.TestimonialPosition>
        <q className="testimonials__text">{testimonial?.feedback && addLineBreaks(testimonial.feedback)}</q>
      <Rating testimonial={testimonial} />
    </Styled.TestimonialContainer>
  );
};

export default Testimonials;
