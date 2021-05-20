import ItemButtons from '../ItemButtons/ItemButtons';
import * as Styled from '../Item.styles';
import { IArticle } from '../types';
import { link } from 'fs';

const Article: React.FC<{
  article: IArticle;
  openModal: Function;
  deleteItem: Function;
}> = ({ article, openModal, deleteItem }) => {
  return (
    <Styled.Wrapper>
      <Styled.Item>
        <ul>
          <li>ID: {article.id} </li>
          <li>Title: {article.title} </li>
          <li>Author: {article.author} </li>
          <li>Content: {article.content} </li>
          <li>Created: {article.createdAt} </li>
          <li>
            Tags:
            <ul>
              {article.tags.map((tag) => (
                <li>{tag.name}</li>
              ))}
            </ul>
          </li>
          <li>Views: {article.views} </li>
        </ul>
        <img
          src={article.imageFile.s3FileUrl}
          alt={article.imageFile.s3FileUrl}
        />
      </Styled.Item>
      <ItemButtons
        deleteItem={() => deleteItem('slogan', article.id)}
        openModal={openModal}
        item={article}
      ></ItemButtons>
    </Styled.Wrapper>
  );
};

export default Article;
