import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import Images from "../Images/Images";
import { IArticle } from "../types";
import * as Styled from "../Form.styles";
import BlogTags from "../BlogTags/BlogTags";
import TextEditor from "../TextEditor/TextEditor";
import { Button } from "app/components/shared/LinkButton/Button.style";

const ArticleForm: React.FC<{
  article?: IArticle | undefined;
  close: Function;
}> = ({ article, close }) => {
  const [title, setTitle] = useState(article?.title || "");
  const [author, setAuthor] = useState(article?.author || "");
  const [content, setContent] = useState(article?.content || "");
  const [tags, setTags] = useState(article?.tags || []);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [imageFileId, setImageFileId] = useState(article?.imageFile?.id || "");

  const closeWindow = () => close();
  const editContent = () => setIsEditorOpen(true);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newArticle = {
      title,
      author,
      content,
      tagIds: tags,
      imageFileId,
    };

    article
      ? updateAdminData("article", article.id, newArticle).then(closeWindow)
      : createAdminData("article", newArticle).then(closeWindow);
  }

  const getImageId = (id) => {
    setImageFileId(id);
  };

  return (
    <Styled.Wrapper>
      {isEditorOpen && (
        <>
          <TextEditor
            content={content}
            setArticleContent={setContent}
            setIsEditorOpen={setIsEditorOpen}
          />
        </>
      )}
      {!isEditorOpen && (
        <Styled.Form onSubmit={handleSubmit}>
          {article ? <h2>Edit article</h2> : <h2>Create new article</h2>}
          <Styled.Label>
            <span>Title:</span>
            <Styled.AdminTextInput
              type="text"
              placeholder="Write article title here"
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
            />
          </Styled.Label>
          <Styled.Label>
            <span>Author:</span>
            <Styled.AdminTextInput
              type="text"
              placeholder="Write author’s name here"
              value={author}
              onChange={({ target: { value } }) => setAuthor(value)}
            />
          </Styled.Label>
          {content && (
            <Styled.Label>
              <span>Your text:</span>
              <Styled.ContentWrapper>
                <Styled.Content dangerouslySetInnerHTML={{ __html: content }} />
              </Styled.ContentWrapper>
            </Styled.Label>
          )}
          <Styled.Label>
            <span>Text:</span>
            <Button type="button" onClick={editContent}>
              Edit content
            </Button>
          </Styled.Label>
          <Styled.Label>
            <BlogTags currentTags={article?.tags || []} getTags={setTags} />
          </Styled.Label>
          <Styled.Label>
            <span>Pictures:</span>
            <Styled.PicturesWrapper>
              <Images activeImage={article?.imageFile} getImageId={getImageId} />
            </Styled.PicturesWrapper>
          </Styled.Label>
          <Styled.ButtonWrapper>
            <Styled.Button
              empty={true}
              type="submit"
              disabled={!(title && author && content && imageFileId)}
            >
              {article ? "Save" : "Create"}
            </Styled.Button>
            <Styled.Button type="button" onClick={closeWindow}>
              Cancel
            </Styled.Button>
          </Styled.ButtonWrapper>
        </Styled.Form>
      )}
    </Styled.Wrapper>
  );
};

export default ArticleForm;
