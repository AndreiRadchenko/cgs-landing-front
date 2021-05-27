import ItemButtons from '../ItemButtons/ItemButtons';
import { IWorker } from '../types';
import * as Styled from '../Item.styles';

const Worker: React.FC<{
  worker: IWorker;
  openModal: Function;
  deleteItem: Function;
}> = ({ worker, openModal, deleteItem }) => {
  return (
    <Styled.Wrapper>
      <Styled.Item>
        <ul>
          <li>ID: {worker.id} </li>
          <li>Title: {worker.name} </li>
          <li>Position: {worker.position} </li>
          <li>Text: {worker.text} </li>
          <li>Show on HomePage: {worker.showOnHomePage ? 'true' : 'false'} </li>
        </ul>
        <img
          src={worker.imageFile.s3FileUrl}
          alt={worker.imageFile.s3FileUrl}
        />
      </Styled.Item>
      <ItemButtons
        deleteItem={() => deleteItem('slogan', worker.id)}
        openModal={openModal}
        item={worker}
      ></ItemButtons>
    </Styled.Wrapper>
  );
};

export default Worker;
