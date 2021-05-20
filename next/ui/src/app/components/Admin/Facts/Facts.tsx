import * as Styled from '../Item.styles';
import { IFact } from '../types';

const Facts: React.FC<{ fact: IFact; openModal: Function }> = ({
  fact,
  openModal,
}) => {
  return (
    <Styled.Wrapper>
      <Styled.Item>
        <ul>
          <li>ID: {fact.id} </li>
          <li>Title: {fact.title} </li>
          <li>Text: {fact.text} </li>
          <li>Show on HomePage: {fact.showOnHomePage ? 'true' : 'false'} </li>
        </ul>
        <img src={fact.iconFile.s3FileUrl} alt={fact.iconFile.s3FileUrl} />
      </Styled.Item>
      <div className="buttons">
        <button onClick={() => openModal(fact)}>Edit</button>
        <button>Delete</button>
      </div>
    </Styled.Wrapper>
  );
};

export default Facts;
