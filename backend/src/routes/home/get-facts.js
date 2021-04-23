const { Fact } = require('../../database');

const { mapFactToResponse } = require('./utils/mappers');

const getFacts = {
  path: '/get-facts',
  method: 'GET',
  handler: async (context) => {
    const query = Fact.find();

    query.where('showOnHomePage', true);

    query.populate({
      path: 'iconFile',
    });

    const facts = await query.exec();

    context.status = 200;

    context.body = {
      response: facts.map(mapFactToResponse),
    };
  },
};

exports.getFacts = getFacts;
