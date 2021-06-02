import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import Images from "../Images/Images";

import { IWorker } from "../types";
import * as Styled from "./WorkerForm.style";

const WorkerForm: React.FC<{
  worker?: IWorker | undefined;
  close: Function;
}> = ({ worker, close }) => {
  const [name, setName] = useState(worker?.name || "");
  const [position, setPosition] = useState(worker?.position || "");
  const [text, setText] = useState(worker?.text || "");
  const [showOnPage, setshowOnPage] = useState(worker?.showOnHomePage || false);
  const [iconFileId, setIconFileId] = useState(worker?.imageFile.id || "");

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
      ? updateAdminData("worker", worker.id, newWorker).then(() => close())
      : createAdminData("worker", newWorker).then(() => close());
  };
  const getImageId = (id) => {
    setIconFileId(id);
  };
  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {worker ? (
          <h2>Edit worker ID: {worker?.id}</h2>
        ) : (
          <h2>Create a worker</h2>
        )}
        <label>
          Worker name
          <input
            className="form__input"
            type="text"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
        </label>
        <label>
          Worker position
          <input
            className="form__input"
            type="text"
            value={position}
            onChange={({ target: { value } }) => setPosition(value)}
          />
        </label>
        <label>
          Worker text
          <textarea
            className="form__text"
            value={text}
            onChange={({ target: { value } }) => setText(value)}
          />
        </label>
        <label className="form__checkbox">
          Show on Home Page
          <input
            type="checkbox"
            checked={showOnPage}
            onChange={({ target: { checked } }) => setshowOnPage(checked)}
          />
        </label>
        <Images
          activeImage={worker?.imageFile}
          getImageId={getImageId}
        ></Images>
        <div className="buttons">
          <button type="submit" disabled={!(name && text && iconFileId)}>
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

export default WorkerForm;
