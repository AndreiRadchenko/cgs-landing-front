const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const {
  normalizeUrl,
  assignExistProperties,
} = require('../../utils/helpers');

const { feedbackPlatformTypes } = require('../../utils/constants');

const { Testimonial } = require('../../database');

const { mapTestimonialToResponse } = require('./utils/mappers');

const testimonialCreate = {
  path: '/',
  method: 'POST',
  checkAuth: true,
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        customerName: yup.string().required(),
        countryCode: yup.string().required(),
        companyName: yup.string().required(),
        customerPosition: yup.string().required(),
        feedback: yup.string().required(),
        platforms: yup.array().of(
          yup.object({
            type: yup.string().oneOf(feedbackPlatformTypes).required(),
            rate: yup.number().min(0).max(5).required(),
            link: yup.string().transform(normalizeUrl).min(1).nullable().optional(),
          }),
        ),
      }),
    },
  },
  async handler(context) {
    const { body } = context.request;

    const testimonial = new Testimonial();

    assignExistProperties(testimonial, body, [
      'customerName',
      'countryCode',
      'companyName',
      'customerPosition',
      'feedback',
      'platforms',
    ]);

    await testimonial.save();

    context.status = StatusCodes.CREATED;

    context.body = {
      response: mapTestimonialToResponse(testimonial),
    };
  },
};

exports.testimonialCreate = testimonialCreate;
