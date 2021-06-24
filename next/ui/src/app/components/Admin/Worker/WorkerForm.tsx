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
  const [showOnPage, setshowOnPage] = useState(worker?.showOnHomePage || false);
  const [iconFileId, setIconFileId] = useState(worker?.imageFile?.id || "");

  const closeWindow = () => close();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newWorker = {
      name,
      text,
      position,
      showOnPage,
      imageFileId: iconFileId,
    };

    worker
      ? updateAdminData("worker", worker?.id, newWorker).then(closeWindow)
      : createAdminData("worker", newWorker).then(closeWindow);
  };
  const getImageId = (id) => {
    setIconFileId(id);
  };
  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {worker ? <h2>Edit worker </h2> : <h2>Create new worker</h2>}
        <Styled.Label>
          <span> Worker name</span>
          <Styled.AdminTextInput
            className="form__input"
            type="text"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            placeholder="Write name/surname here"
          />
        </Styled.Label>
        <Styled.Label>
          <span>Worker position</span>
          <Styled.AdminTextInput
            className="form__input"
            type="text"
            value={position}
            onChange={({ target: { value } }) => setPosition(value)}
            placeholder="Write worker’s position here"
          />
        </Styled.Label>
        <Styled.Label>
          <span>Worker text</span>
          <Styled.AdminTextArea
            className="form__text"
            value={text}
            onChange={({ target: { value } }) => setText(value)}
            placeholder="Write some text here"
          />
        </Styled.Label>
        <Styled.PicturesWrapper>
          <span>Pictures:</span>
          <Images activeImage={worker?.imageFile} getImageId={getImageId} />
        </Styled.PicturesWrapper>
        <Styled.Label>
          <span>Show:</span>
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
    </Styled.Wrapper>
  );
};

export default WorkerForm;
