import { useState } from 'react';
import { createAdminData, updateAdminData } from 'services/api/adminApi';
import Images from '../Images/Images';

import { IArticle } from '../types';
import * as Styled from '../Form.styles';
import BlogTags from '../BlogTags/BlogTags';

const ArticleForm: React.FC<{
  article?: IArticle | undefined;
  close: Function;
}> = ({ article, close }) => {
  const [title, setTitle] = useState(article?.title || '');
  const [author, setAuthor] = useState(article?.author || '');
  const [content, setContent] = useState(article?.content || '');
  const [tags, setTags] = useState(article?.tags || []);

  const [iconFileId, setIconFileId] = useState(article?.imageFile.id || '');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newArticle = {
      title,
      author,
      content,
      tagIds: tags,
      iconFileId,
    };

    article
      ? updateAdminData('article', article.id, newArticle).then(() => close())
      : createAdminData('article', newArticle).then(() => close());
  }

  function getImageId(id) {
    setIconFileId(id);
  }

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {article ? (
          <h2>Edit article ID: {article?.id}</h2>
        ) : (
          <h2>Create a article</h2>
        )}
        <label>
          Article Title:
          <input
            className="form__title"
            type="text"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
          />
        </label>

        <label>
          Author:
          <input
            className="form__title"
            type="text"
            value={author}
            onChange={({ target: { value } }) => setAuthor(value)}
          />
        </label>
        <label>
          Content:
          <textarea
            className="form__title"
            value={content}
            onChange={({ target: { value } }) => setContent(value)}
          />
        </label>
        <BlogTags
          currentTags={article?.tags || []}
          getTags={setTags}
        ></BlogTags>
        <Images
          activeImage={article?.imageFile}
          getImageId={getImageId}
        ></Images>
        <div className="buttons">
          <button
            type="submit"
            disabled={!(title && author && content && iconFileId)}
          >
            Save Changes
          </button>
          <button type="button" onClick={() => close()}>
            Cancel
          </button>
        </div>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default ArticleForm;
