const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { Project } = require('../../database');

const projectDelete = {
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

    const project = await Project.findByIdAndDelete(params.id);

    if (!project) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = StatusCodes.NO_CONTENT;
  },
};

exports.projectDelete = projectDelete;
