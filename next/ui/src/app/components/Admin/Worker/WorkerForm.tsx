import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import Images from "../Images/Images";

import { IWorker } from "../types";
// import * as Styled from "./WorkerForm.style";
import * as Styled from "../Form.styles";
import { slides } from "app/img";

const WorkerForm: React.FC<{
  worker?: IWorker | undefined;
  close: Function;
}> = ({ worker, close }) => {
  const [name, setName] = useState(worker?.name || "");
  const [position, setPosition] = useState(worker?.position || "");
  const [text, setText] = useState(worker?.text || "");
  const [iconFileId, setIconFileId] = useState(worker?.imageFile?.id || "");
  const [showOnPage, setshowOnPage] = useState(worker?.showOnHomePage || false);
  const [placeOnHomePage, setPlaceOnHomePage] = useState(worker?.placeOnHomePage ?? 1);

  const closeWindow = () => close();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newWorker = {
      name,
      text,
      position,
      imageFileId: iconFileId,
      showOnPage,
      placeOnHomePage,
    };

    if (worker) {
      updateAdminData("worker", worker?.id, newWorker).then(() => {
        closeWindow();
      });
    } else {
      createAdminData("worker", newWorker).then(() => {
        closeWindow();
      });
    }
  };

  const getImageId = (id) => {
    setIconFileId(id);
  };

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {worker
          ? <h2>Edit worker</h2>
          : <h2>Create new worker</h2>
        }
        <Styled.Label>
          <span>Name:</span>
          <Styled.AdminTextInput
            className="form__input"
            type="text"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            placeholder="Write name/surname here"
          />
        </Styled.Label>
        <Styled.Label>
          <span>Position:</span>
          <Styled.AdminTextInput
            className="form__input"
            type="text"
            value={position}
            onChange={({ target: { value } }) => setPosition(value)}
            placeholder="Write worker’s position here"
          />
        </Styled.Label>
        <Styled.Label>
          <span>Text:</span>
          <Styled.AdminTextAreaWrapper>
            <Styled.AdminTextArea
              className="form__text"
              value={text}
              onChange={({ target: { value } }) => setText(value)}
              placeholder="Write some text here"
            />
          </Styled.AdminTextAreaWrapper>
        </Styled.Label>
        <Styled.Label>
          <span>Pictures:</span>
          <Styled.PicturesWrapper>
            <Images activeImage={worker?.imageFile} getImageId={getImageId} />
          </Styled.PicturesWrapper>
        </Styled.Label>
        <Styled.Label>
          <span>Show on page:</span>
          <Styled.SingleCheckboxContainer>
            <Styled.CheckboxLabel position="static">
              <input
                type="checkbox"
                name="TechOption"
                checked={showOnPage}
                onChange={(event) => {
                  setshowOnPage(event.target.checked);
                }}
              />
              <Styled.CustomCheckbox selected={showOnPage}>
                <img src={slides?.Check} alt="checkbox" />
              </Styled.CustomCheckbox>
            </Styled.CheckboxLabel>
          </Styled.SingleCheckboxContainer>
        </Styled.Label>
        <Styled.Label>
          <span>Place:</span>
          <Styled.AdminTextInput
            type="number"
            min="1"
            value={placeOnHomePage}
            onChange={(event) => {
              setPlaceOnHomePage(Number(event.target.value));
            }}
            placeholder="Place"
          />
        </Styled.Label>
        <Styled.ButtonWrapper>
          <Styled.Button
            type="submit"
            empty={true}
            disabled={!(name && text && iconFileId)}
          >
            {worker ? "Save" : "Create"}
          </Styled.Button>
          <Styled.Button type="button" onClick={closeWindow}>
            Cancel
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Wrapper >
  );
};

export default WorkerForm;
