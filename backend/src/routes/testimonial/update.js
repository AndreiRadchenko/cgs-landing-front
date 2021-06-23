const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const {
  normalizeUrl,
  assignExistProperties,
} = require('../../utils/helpers');

const { feedbackPlatformTypes } = require('../../utils/constants');

const { Testimonial } = require('../../database');

const { mapTestimonialToResponse } = require('./utils/mappers');

const testimonialUpdate = {
  path: '/:id',
  method: 'PUT',
  checkAuth: true,
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().required(),
      }),
    },
    body: {
      type: 'json',
      schema: yup.object({
        customerName: yup.string().min(1).optional(),
        countryCode: yup.string().min(1).optional(),
        companyName: yup.string().min(1).optional(),
        customerPosition: yup.string().min(1).optional(),
        feedback: yup.string().min(1).optional(),
        platforms: yup
          .array()
          .of(
            yup.object({
              type: yup.string().oneOf(feedbackPlatformTypes).required(),
              rate: yup.number().min(0).max(5).required(),
              link: yup.string().transform(normalizeUrl).required(),
            }),
          )
          .min(1)
          .optional(),
      }),
    },
  },
  async handler(context) {
    const { params, body } = context.request;

    const testimonial = await Testimonial.findById(params.id);

    if (!testimonial) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    assignExistProperties(testimonial, body, [
      'customerName',
      'countryCode',
      'companyName',
      'customerPosition',
      'feedback',
      'platforms',
    ]);

    await testimonial.save();

    context.body = {
      response: mapTestimonialToResponse(testimonial),
    };
  },
};

exports.testimonialUpdate = testimonialUpdate;
