import { ISlogan } from '../types';
import * as Styled from '../Item.styles';
import ItemButtons from '../ItemButtons/ItemButtons';
import { deleteAdminData } from 'services/api/adminApi';

const Slogan: React.FC<{
  slogan: ISlogan;
  openModal: Function;
  deleteItem: Function;
}> = ({ slogan, openModal, deleteItem }) => {
  return (
    <Styled.Wrapper>
      <Styled.Item>
        <ul>
          <li>ID: {slogan.id} </li>
          <li>Title: {slogan.title} </li>
          <li>Text: {slogan.text} </li>
          <li>Selected: {slogan.selected ? 'true' : 'false'} </li>
        </ul>
      </Styled.Item>
      <ItemButtons
        openModal={openModal}
        item={slogan}
        deleteItem={() => deleteItem('slogan', slogan.id)}
      ></ItemButtons>
    </Styled.Wrapper>
  );
};

export default Slogan;
