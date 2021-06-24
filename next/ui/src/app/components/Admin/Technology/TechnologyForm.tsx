import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import Images from "../Images/Images";
import { slides } from "app/img";

import { ITechnology } from "../types";
import * as Styled from "../Form.styles";

const TechnologyForm: React.FC<{
  technology?: ITechnology | undefined;
  close: Function;
}> = ({ technology, close }) => {
  const [name, setName] = useState(technology?.name || "");
  const [category, setCategory] = useState(technology?.category || "mobile");
  const [iconFileId, setIconFileId] = useState(technology?.iconFile?.id || "");
  const [showOnHomePage, setShowOnHomePage] = useState(technology?.showOnHomePage ?? true);

  const closeWindow = () => close();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTechnology = {
      name,
      category,
      iconFileId,
      showOnHomePage,
    };

    if (technology) {
      updateAdminData("technology", technology.id, newTechnology).then(() => closeWindow());
    } else {
      createAdminData("technology", newTechnology).then(() => closeWindow());
    }
  };

  const getImageId = (id: string) => {
    setIconFileId(id);
  };

  const handleCategory = (category: string) => {
    setCategory(category);
  };

  const options = {
    Mobile: "mobile",
    UIUX: "ui_ux",
    Backend: "backend",
    Web: "web",
  };

  const keys = Object.keys(options);

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {technology
          ? <h2>Edit technology</h2>
          : <h2>Create new technology</h2>
        }
        <Styled.Label>
          <span>Name:</span>
          <Styled.AdminTextInput
            className="form__title"
            type="text"
            value={name}
            placeholder={technology ? "" : "Write name here"}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </Styled.Label>
        <Styled.Label>
          <span> Category: </span>
          <Styled.Select
            className="form__title"
            onChange={({ target }) => {
              handleCategory(target.value);
            }}
          >
            {keys.map((key) => {
              return (
                <option
                  key={key}
                  value={options[key]}
                  selected={technology?.category === options[key]}
                >
                  {key}
                </option>
              );
            })}
            )
          </Styled.Select>
        </Styled.Label>
        <Styled.Label>
        <Styled.PicturesWrapper>
          <span>Pictures:</span>
          <Images activeImage={technology?.iconFile} getImageId={getImageId} />
        </Styled.PicturesWrapper>
        </Styled.Label>
        <Styled.Label>
          <span>Show on page:</span>
          <Styled.SingleCheckboxContainer>
            <Styled.CheckboxLabel position="static">
              <input
                type="checkbox"
                name="showOnHomePage"
                checked={showOnHomePage}
                onChange={(event) => {
                  setShowOnHomePage(event.target.checked);
                }}
              />
              <Styled.CustomCheckbox selected={showOnHomePage}>
                <img src={slides?.Check} alt="checkbox" />
              </Styled.CustomCheckbox>
            </Styled.CheckboxLabel>
          </Styled.SingleCheckboxContainer>
        </Styled.Label>
        <Styled.ButtonWrapper>
          <Styled.Button
            type="submit"
            empty={true}
            disabled={!(name && category && iconFileId)}
          >
            {technology ? "Save" : "Create"}
          </Styled.Button>
          <Styled.Button type="button" onClick={closeWindow}>
            Cancel
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default TechnologyForm;
