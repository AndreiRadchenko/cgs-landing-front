const { Project } = require('../../database');

const { mapProjectToResponse } = require('./utils/mappers');

const getProjects = {
  path: '/get-projects',
  method: 'GET',
  handler: async (context) => {
    const query = Project.find();

    query.where('showOnHomePage', true);

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

exports.getProjects = getProjects;
