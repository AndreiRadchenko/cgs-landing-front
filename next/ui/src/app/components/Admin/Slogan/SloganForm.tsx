import { useState } from 'react';
import { createAdminData, updateAdminData } from 'services/api/adminApi';
import { ISlogan } from '../types';
import * as Styled from '../Form.styles';

const SloganForm: React.FC<{
  slogan?: ISlogan | undefined;
  close: Function;
}> = ({ slogan, close }) => {
  const [title, setTitle] = useState(slogan?.title || '');
  const [text, setText] = useState(slogan?.text || '');
  const [selected, setSelected] = useState(slogan?.selected || false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newSlogan = {
      title,
      text,
      selected,
    };

    slogan
      ? updateAdminData('slogan', slogan.id, newSlogan).then(() => close())
      : createAdminData('slogan', newSlogan).then(() => close());
  }

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {slogan ? <h2>Edit slogan ID: {slogan.id}</h2> : <h2>Create slogan</h2>}
        <label>
          Slogan title
          <input
            type="text"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
          />
        </label>
        <label>
          Slogan text
          <input
            type="text"
            value={text}
            onChange={({ target: { value } }) => setText(value)}
          />
        </label>
        <label>
          Selected
          <input
            type="checkbox"
            checked={selected}
            onChange={({ target: { checked } }) => setSelected(checked)}
          />
        </label>
        <button type="submit" disabled={!(title && text)}>
          Save Changes
        </button>
        <button type="button" onClick={() => close()}>
          Cancel
        </button>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default SloganForm;
