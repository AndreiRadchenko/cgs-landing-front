import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import Images from "../Images/Images";

import { ITechnology } from "../types";
import * as Styled from "../Form.styles";

const TechnologyForm: React.FC<{
  technology?: ITechnology | undefined;
  close: Function;
}> = ({ technology, close }) => {
  const [name, setName] = useState(technology?.name || "");
  const [category, setCategory] = useState(technology?.category || "");
  const [iconFileId, setIconFileId] = useState(technology?.iconFile.id || "");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTechnology = {
      name,
      category,
      iconFileId,
    };

    technology
      ? updateAdminData("technology", technology.id, newTechnology).then(() =>
          close()
        )
      : createAdminData("technology", newTechnology).then(() => close());
  };

  const getImageId = (id) => {
    setIconFileId(id);
  };

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {technology ? (
          <h2>Edit technology </h2>
        ) : (
          <h2>Create new technology</h2>
        )}
        <Styled.Label>
          <span>Name:</span>
          <Styled.AdminTextInput
            placeholder={technology ? "" : "Write name here"}
            className="form__title"
            type="text"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
        </Styled.Label>

        <Styled.Label>
          <span>Title:</span>
          <Styled.AdminTextInput
            placeholder={technology ? "" : "Choose category"}
            className="form__title"
            type="text"
            value={category}
            onChange={({ target: { value } }) => setCategory(value)}
          />
        </Styled.Label>
        <Styled.PicturesWrapper>
          <span>Pictures:</span>
          <Images activeImage={technology?.iconFile} getImageId={getImageId} />
        </Styled.PicturesWrapper>
        <Styled.ButtonWrapper>
          <Styled.Button
            type="submit"
            disabled={!(name && category && iconFileId)}
          >
            {technology ? "Save" : "Changes"}
          </Styled.Button>
          <Styled.Button type="button" onClick={() => close()}>
            Cancel
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default TechnologyForm;
