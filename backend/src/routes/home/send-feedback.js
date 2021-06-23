const yup = require('yup');

const { mailService } = require('../../services/mail-service');

const sendRequest = {
  path: '/send-feedback',
  method: 'POST',
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        message: yup.string().required(),
      }),
    },
  },
  async handler(context) {
    const { body } = context.request;

    await mailService.sendTemplate({
      subject: body.name,
      template: {
        name: 'feedback',
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

exports.sendRequest = sendRequest;
