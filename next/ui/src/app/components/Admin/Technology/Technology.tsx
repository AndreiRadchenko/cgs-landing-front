import ItemButtons from '../ItemButtons/ItemButtons';
import * as Styled from '../Item.styles';
import { ITechnology } from '../types';

const Techology: React.FC<{
  technology: ITechnology;
  openModal: Function;
  deleteItem: Function;
}> = ({ technology, openModal, deleteItem }) => {
  return (
    <Styled.Wrapper>
      <Styled.Item>
        <ul>
          <li>ID: {technology.id} </li>
          <li>Name: {technology.name} </li>
          <li>Category: {technology.category} </li>
        </ul>
        <img
          src={technology.iconFile.s3FileUrl}
          alt={technology.iconFile.s3FileUrl}
        />
      </Styled.Item>
      <ItemButtons
        deleteItem={() => deleteItem('slogan', technology.id)}
        openModal={openModal}
        item={technology}
      ></ItemButtons>
    </Styled.Wrapper>
  );
};

export default Techology;
