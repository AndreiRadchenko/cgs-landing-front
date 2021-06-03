import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import Images from "../Images/Images";

import { IFeaturedTechnology } from "../types";
import * as Styled from "../Form.styles";

const FeaturedTechologyForm: React.FC<{
  featuredTechnology?: IFeaturedTechnology | undefined;
  close: Function;
}> = ({ featuredTechnology, close }) => {
  const [name, setName] = useState(featuredTechnology?.name || "");
  const [text, setCategory] = useState(featuredTechnology?.text || "");
  const [imageFileId, setImageFileId] = useState(
    featuredTechnology?.imageFile.id || ""
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newFeaturedTechnology = {
      name,
      text,
      imageFileId,
    };

    featuredTechnology
      ? updateAdminData(
          "featuredTechnology",
          featuredTechnology.id,
          newFeaturedTechnology
        ).then(() => close())
      : createAdminData("featuredTechnology", newFeaturedTechnology).then(() =>
          close()
        );
  };

  const getImageId = (id) => {
    setImageFileId(id);
  };

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {featuredTechnology ? (
          <h2>Edit Featured Technology ID: {featuredTechnology?.id}</h2>
        ) : (
          <h2>Create a Featured Technology</h2>
        )}
        <label>
          Featured Technology Name:
          <input
            className="form__title"
            type="text"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
        </label>

        <label>
          Featured Technology text:
          <textarea
            className="form__text"
            value={text}
            onChange={({ target: { value } }) => setCategory(value)}
          />
        </label>

        <Images
          activeImage={featuredTechnology?.imageFile}
          getImageId={getImageId}
        ></Images>
        <div className="buttons">
          <button type="submit" disabled={!(name && text && imageFileId)}>
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

export default FeaturedTechologyForm;
