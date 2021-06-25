const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const {
  normalizeUrl,
  assignExistProperties,
} = require('../../utils/helpers');

const { Project } = require('../../database');

const { mapProjectToResponse } = require('./utils/mappers');

const projectUpdate = {
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
        name: yup.string().min(1).optional(),
        countryCode: yup.string().min(1).optional(),
        shortDescription: yup.string().min(1).optional(),
        fullDescription: yup.string().min(1).optional(),
        technologyIds: yup.array().of(yup.objectId()).min(1).optional(),
        link: yup
          .string()
          .transform(normalizeUrl)
          .min(1)
          .nullable()
          .optional(),
        imageFileId: yup.objectId().optional(),
        showOnHomePage: yup.boolean().optional(),
      }),
    },
  },
  async handler(context) {
    const { params, body } = context.request;

    let project = await Project.findById(params.id);

    if (!project) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    if (body.technologyIds !== undefined) {
      project.technologies = body.technologyIds;
    }

    if (body.imageFileId !== undefined) {
      project.imageFile = body.imageFileId;
    }

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

    context.body = {
      response: mapProjectToResponse(project),
    };
  },
};

exports.projectUpdate = projectUpdate;
