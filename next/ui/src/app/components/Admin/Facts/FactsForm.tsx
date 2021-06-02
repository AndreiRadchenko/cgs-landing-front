import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import Images from "../Images/Images";

import { IFact } from "../types";
import * as Styled from "./FactsForm.styles";

const FactsForm: React.FC<{
  fact?: IFact | undefined;
  close: Function;
}> = ({ fact, close }) => {
  const [title, setTitle] = useState(fact?.title || "");
  const [text, setText] = useState(fact?.text || "");
  const [showOnPage, setshowOnPage] = useState(fact?.showOnHomePage || false);
  const [iconFileId, setIconFileId] = useState(fact?.iconFile.id || "");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newFact = {
      title,
      text,
      showOnPage,
      iconFileId,
    };

    fact
      ? updateAdminData("facts", fact.id, newFact).then(() => close())
      : createAdminData("facts", newFact).then(() => close());
  };

  const getImageId = (id) => {
    setIconFileId(id);
  };

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {fact ? <h2>Edit Fact ID: {fact?.id}</h2> : <h2>Create a fact</h2>}
        <label>
          Fact title
          <input
            className="form__title"
            type="text"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
          />
        </label>
        <label>
          Fact text
          <textarea
            className="form__text"
            value={text}
            onChange={({ target: { value } }) => setText(value)}
          />
        </label>
        <label>
          Show on Home Page
          <input
            type="checkbox"
            checked={showOnPage}
            onChange={({ target: { checked } }) => setshowOnPage(checked)}
          />
        </label>
        <Images activeImage={fact?.iconFile} getImageId={getImageId}></Images>
        <div className="buttons">
          <button type="submit" disabled={!(title && text && iconFileId)}>
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

export default FactsForm;
