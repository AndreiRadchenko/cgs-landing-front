import { useState } from 'react';
import { createAdminData, updateAdminData } from 'services/api/adminApi';
import Images from '../Images/Images';

import { ITechnology } from '../types';
import * as Styled from '../Form.styles';

const TechnologyForm: React.FC<{
  technology?: ITechnology | undefined;
  close: Function;
}> = ({ technology, close }) => {
  const [name, setName] = useState(technology?.name || '');
  const [category, setCategory] = useState(technology?.category || '');
  const [iconFileId, setIconFileId] = useState(technology?.iconFile.id || '');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTechnology = {
      name,
      category,
      iconFileId,
    };

    technology
      ? updateAdminData('technology', technology.id, newTechnology).then(() =>
          close()
        )
      : createAdminData('technology', newTechnology).then(() => close());
  }

  function getImageId(id) {
    setIconFileId(id);
  }

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {technology ? (
          <h2>Edit technology ID: {technology?.id}</h2>
        ) : (
          <h2>Create a technology</h2>
        )}
        <label>
          technology Name:
          <input
            className="form__title"
            type="text"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
        </label>

        <label>
          Country Code:
          <input
            className="form__title"
            type="text"
            value={category}
            onChange={({ target: { value } }) => setCategory(value)}
          />
        </label>
        <Images
          activeImage={technology?.iconFile}
          getImageId={getImageId}
        ></Images>
        <div className="buttons">
          <button type="submit" disabled={!(name && category && iconFileId)}>
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

export default TechnologyForm;
