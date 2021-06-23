const { Testimonial } = require('../../database');

const { mapTestimonialToResponse } = require('./utils/mappers');

const getTestimonials = {
  path: '/get-testimonials',
  method: 'GET',
  async handler(context) {
    const testimonials = await Testimonial.find();

    context.body = {
      response: testimonials.map(mapTestimonialToResponse),
    };
  },
};

exports.getTestimonials = getTestimonials;
