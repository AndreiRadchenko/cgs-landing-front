const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const {
  normalizeUrl,
  assignExistProperties,
} = require('../../utils/helpers');

const { Project } = require('../../database');

const { mapProjectToResponse } = require('./utils/mappers');

const projectCreate = {
  path: '/',
  method: 'POST',
  checkAuth: true,
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        name: yup.string().required(),
        countryCode: yup.string().required(),
        shortDescription: yup.string().required(),
        fullDescription: yup.string().required(),
        technologyIds: yup.array().of(yup.objectId()).min(1).required(),
        link: yup.string().transform(normalizeUrl).required(),
        imageFileId: yup.objectId().required(),
        showOnHomePage: yup.boolean().optional(),
      }),
    },
  },
  async handler(context) {
    const { body } = context.request;

    let project = new Project({
      imageFile: body.imageFileId,
      technologies: body.technologyIds,
    });

    assignExistProperties(project, body, [
      'name',
      'countryCode',
      'shortDescription',
      'fullDescription',
      'link',
      'showOnHomePage',
    ]);

    await project.save();

    project.populate([
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

    project = await project.execPopulate();

    context.status = StatusCodes.CREATED;

    context.body = {
      response: mapProjectToResponse(project),
    };
  },
};

exports.projectCreate = projectCreate;
