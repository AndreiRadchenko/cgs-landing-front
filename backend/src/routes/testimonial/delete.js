const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { Testimonial } = require('../../database');

const testimonialDelete = {
  path: '/:id',
  method: 'DELETE',
  checkAuth: true,
  validate: {
    params: {
      schema: yup.object({
        id: yup.string().required(),
      }),
    },
  },
  async handler(context) {
    const { params } = context.request;

    const testimonial = await Testimonial.findByIdAndDelete(params.id);

    if (!testimonial) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = StatusCodes.NO_CONTENT;
  },
};

exports.testimonialDelete = testimonialDelete;
