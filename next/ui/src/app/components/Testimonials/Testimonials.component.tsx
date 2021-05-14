import React from 'react';
import * as Styled from './Testimonials.styles';
import { v4 as uuidv4 } from 'uuid';
import Rating from './rating/Rating';

const Testimonials = ({ testimonial }) => {
  return (
    <Styled.TestimonialContainer key={uuidv4()}>
      <div className="titleWrapper">
        <h2>{testimonial.name}</h2>
        <img
          className="testimonials__flag"
          src={testimonial?.flag}
          alt=""
          width="40px"
          height="24px"
        />
        <p className="testimonials__country">{testimonial.country}</p>
      </div>
      <p className="testimonials__company">{testimonial.companyName}</p>
      <p className="testimonials__position">{testimonial.position}</p>
      <q className="testimonials__text">{testimonial.text}</q>
      <Rating testimonial={testimonial} />
    </Styled.TestimonialContainer>
  );
};

export default Testimonials;
