const yup = require('yup');

const { mailService } = require('../../services/mail-service');

const sendFeedback = {
  path: '/send-feedback',
  method: 'POST',
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        message: yup.string().default('Empty'),
      }),
    },
  },
  async handler(context) {
    const { body } = context.request;

    await mailService.sendTemplate({
      subject: body.name,
      template: {
        name: 'partner-feedback',
        context: {
          name: body.name,
          email: body.email,
          message: body.message,
        },
      },
    });

    context.body = {
      response: true,
    };
  },
};

exports.sendFeedback = sendFeedback;
