const yup = require('yup');

const { Project } = require('../../database');

const { mapProjectToResponse } = require('./utils/mappers');

const projectGet = {
  path: '/:id?',
  method: 'GET',
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().optional(),
      }),
    },
  },
  handler: async (context) => {
    const { params } = context.request;

    const query = Project.find();

    if (params.id !== undefined) {
      query.where('_id', params.id);
    }

    query.populate([
      {
        path: 'technologies',
        populate: {
          path: 'iconFile',
        },
      },
      {
        path: 'imageFile',
      },
    ]);

    const projects = await query.exec();

    context.status = 200;

    context.body = {
      response: projects.map(mapProjectToResponse),
    };
  },
};

exports.projectGet = projectGet;
