const { resolve: pathResolve } = require('path');
const { promises: { readFile } } = require('fs');

const { render } = require('mustache');

const { templatesPath } = require('../utils/constants');

class TemplateService {
  async render({ name, context }) {
    const filePath = pathResolve(templatesPath, `${name}.hbs`);

    const template = await readFile(filePath, 'utf-8');

    return render(template, context);
  }
}

exports.TemplateService = TemplateService;

const templateService = new TemplateService();

exports.templateService = templateService;
