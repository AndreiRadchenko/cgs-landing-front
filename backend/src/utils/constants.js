const { resolve: pathResolve } = require('path');

const assetsPath = pathResolve(__dirname, '../../assets');

exports.assetsPath = assetsPath;

const imagesPath = pathResolve(assetsPath, 'images');

exports.imagesPath = imagesPath;

const templatesPath = pathResolve(assetsPath, 'templates');

exports.templatesPath = templatesPath;

const TechnologyType = {
  BACKEND: 'backend',
  WEB: 'web',
  UI_UX: 'ui_ux',
  MOBILE: 'mobile',
};

exports.TechnologyType = TechnologyType;

const technologyTypes = Object.values(TechnologyType);

exports.technologyTypes = technologyTypes;

const FeedbackPlatformType = {
  UPWORK: 'upwork',
  CLUTCH: 'clutch',
};

exports.FeedbackPlatformType = FeedbackPlatformType;

const feedbackPlatformTypes = Object.values(FeedbackPlatformType);

exports.feedbackPlatformTypes = feedbackPlatformTypes;
