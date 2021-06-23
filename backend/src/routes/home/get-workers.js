const { Worker } = require('../../database');

const { mapWorkerToResponse } = require('./utils/mappers');

const getWorkersRoute = {
  path: '/get-workers',
  method: 'GET',
  async handler(context) {
    const query = Worker.find();

    query.where('showOnHomePage', true);

    query.sort({
      placeOnHomePage: 1,
    });

    query.populate({
      path: 'imageFile',
    });

    const workers = await query.exec();

    context.body = {
      response: workers.map(mapWorkerToResponse),
    };
  },
};

exports.getWorkersRoute = getWorkersRoute;
