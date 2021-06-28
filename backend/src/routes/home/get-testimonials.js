const { Testimonial } = require('../../database');

const { mapTestimonialToResponse } = require('./utils/mappers');

const getTestimonials = {
  path: '/get-testimonials',
  method: 'GET',
  async handler(context) {
    const query = Testimonial.find();

    query.sort({
      createdAt: -1,
    });

    const testimonials = await query.exec();

    context.body = {
      response: testimonials.map(mapTestimonialToResponse),
    };
  },
};

exports.getTestimonials = getTestimonials;
