const { mapBlogTagToResponse } = require('../../blog-tag/utils/mappers');

const mapArticleToResponse = (article) => ({
  id: article.id,
  title: article.title,
  author: article.author,
  imageFileUrl: article.imageFile?.s3FileUrl ?? null,
  content: article.content,
  tags: article.tags.map(mapBlogTagToResponse),
  createdAt: article.createdAt,
});

exports.mapArticleToResponse = mapArticleToResponse;
