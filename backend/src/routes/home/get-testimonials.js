const { Testimonial } = require('../../database');

const { mapTestimonialToResponse } = require('./utils/mappers');

const getTestimonials = {
  path: '/get-testimonials',
  method: 'GET',
  handler: async (context) => {
    const testimonials = await Testimonial.find();

    context.status = 200;

    context.body = {
      response: testimonials.map(mapTestimonialToResponse),
    };
  },
};

exports.getTestimonials = getTestimonials;
