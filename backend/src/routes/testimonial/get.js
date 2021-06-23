const yup = require('yup');

const { Testimonial } = require('../../database');

const { mapTestimonialToResponse } = require('./utils/mappers');

const testimonialGet = {
  path: '/:id?',
  method: 'GET',
  checkAuth: true,
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().optional(),
      }),
    },
  },
  async handler(context) {
    const { params } = context.request;

    const query = Testimonial.find();

    if (params.id !== undefined) {
      query.where('_id', params.id);
    }

    const testimonials = await query.exec();

    context.body = {
      response: testimonials.map(mapTestimonialToResponse),
    };
  },
};

exports.testimonialGet = testimonialGet;
