import React from "react";
import * as Styled from "./Testimonials.styles";
import { v4 as uuidv4 } from "uuid";
import Rating from "./rating/Rating";
import ReactCountryFlag from "react-country-flag";
import { getName } from "country-list";

const Testimonials = ({ testimonial }) => {
  const country = getName(testimonial?.countryCode);

  const flagStyle = {
    width: "100%",
    height: "100%",
  };

  const testimoniaToRender =
    country?.split(" ").length < 3 ? country : testimonial?.countryCode;

  return (
    <Styled.TestimonialContainer key={uuidv4()}>
      <div className="titleWrapper">
        <h2>{testimonial?.customerName}</h2>
      </div>
      <div className="infoWrapper">
        {country && (
          <Styled.TestimonialFlag>
            <ReactCountryFlag
              countryCode={testimonial?.countryCode}
              svg
              style={flagStyle}
            />
          </Styled.TestimonialFlag>
        )}
        <p className="testimonials__country">{testimoniaToRender}</p>
      </div>
      <p className="testimonials__company">{testimonial?.companyName}</p>
      <Styled.TestimonialPosition>
        {testimonial?.customerPosition}
      </Styled.TestimonialPosition>
      <q className="testimonials__text">{testimonial?.feedback}</q>
      <Rating testimonial={testimonial} />
    </Styled.TestimonialContainer>
  );
};

export default Testimonials;
