import { ISlogan } from '../types';
import * as Styled from '../Item.styles';
import ItemButtons from '../ItemButtons/ItemButtons';
import { deleteAdminData } from 'services/api/adminApi';

const Slogan: React.FC<{
  slogan: ISlogan;
  openModal: Function;
  deleteItem: Function;
  setIsModal: Function
}> = ({ slogan, openModal, deleteItem, setIsModal }) => {
  return (
    <Styled.Wrapper>
        <Styled.Title>Slogan</Styled.Title>
      <button
              className="button"
              type="button"
              onClick={() => setIsModal(true)}
            >
              Create new entry
      </button>
      <Styled.Item>
        <Styled.List>
          <Styled.ListItem><span>Title:</span> <span>{slogan.title}</span> </Styled.ListItem>
          <Styled.ListItem><span>Text:</span> <span>{slogan.text}</span> </Styled.ListItem>
          <Styled.ListItem><span>Selected:</span> <span>{slogan.selected ? 'true' : 'false'}</span> </Styled.ListItem>
        </Styled.List>
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
