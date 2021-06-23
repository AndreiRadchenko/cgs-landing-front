const { mapFileToResponse } = require('../../file/utils/mappers');
const { mapBlogTagToResponse } = require('../../blog-tag/utils/mappers');

const mapArticleToResponse = (article) => ({
  id: article.id,
  title: article.title,
  author: article.author,
  imageFile: article.imageFile
    ? mapFileToResponse(article.imageFile)
    : null,
  content: article.content,
  tags: article.tags.map(mapBlogTagToResponse),
  views: article.views,
  createdAt: article.createdAt,
});

exports.mapArticleToResponse = mapArticleToResponse;
