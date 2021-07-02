import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import Images from "../Images/Images";
import { IFact } from "../types";
import * as Styled from "../Form.styles";
import { slides } from "app/img";
import { Button } from "app/components/shared/LinkButton/Button.style";

import TextEditor from "../TextEditor/TextEditor";


const FactsForm: React.FC<{
  fact?: IFact | undefined;
  close: Function;
}> = ({ fact, close }) => {
  const [title, setTitle] = useState(fact?.title || "");
  const [text, setText] = useState(fact?.text || "");
  const [showOnHomePage, setShowOnHomePage] = useState(
    fact?.showOnHomePage || false
  );
  const [iconFileId, setIconFileId] = useState(fact?.iconFile?.id || "");
  const [editContent, setEditContent] = useState(false)  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newFact = {
      title,
      text,
      showOnHomePage,
      iconFileId,
    };

    fact
      ? updateAdminData("facts", fact?.id, newFact).then(() => close())
      : createAdminData("facts", newFact).then(() => close());
  };

  const getImageId = (id) => {
    setIconFileId(id);
  };
  const closeWindow = () => close();

  return (
    <Styled.Wrapper>

      {editContent ? (
        <TextEditor
          content={text}
          setArticleContent={setText}
          setIsEditorOpen={setEditContent}
        />
      ) : 

      <Styled.Form onSubmit={handleSubmit}>
        {fact ? <h2>Edit Fact</h2> : <h2>Create new fact</h2>}
        <Styled.Label>
          <span>Fact title:</span>
          <Styled.AdminTextInput
            type="text"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
            placeholder="Write title here"
          />
        </Styled.Label>
        <Styled.Label>
          <span>Fact text</span>
          <Styled.AdminTextAreaWrapper>
            <Styled.AdminTextArea
              value={text}
              onChange={({ target: { value } }) => setText(value)}
              placeholder="Write some text here"
            />
          </Styled.AdminTextAreaWrapper>
        </Styled.Label>
        <Styled.Label>
            <span>Content:</span>
            <Button type="button" onClick={() => setEditContent(true)}>
              Edit content
          </Button>
          </Styled.Label>
        <Styled.Label>
          <span>Show on page:</span>          
          <Styled.SingleCheckboxContainer>
            <Styled.CheckboxLabel position="static">
              <input
                type="checkbox"
                name="TechOption"
                checked={showOnHomePage}
                onChange={({ target: { checked } }) => setShowOnHomePage(checked)}
              />
              <Styled.CustomCheckbox selected={showOnHomePage}>
                <img src={slides.Check} alt="checkbox" />
              </Styled.CustomCheckbox>
            </Styled.CheckboxLabel>
          </Styled.SingleCheckboxContainer>
        </Styled.Label>
        <Styled.Label>
          <span>Pictures:</span>
          <Styled.PicturesWrapper>
            <Images activeImage={fact?.iconFile} getImageId={getImageId} />
          </Styled.PicturesWrapper>
        </Styled.Label>
        <Styled.ButtonWrapper>
          <Styled.Button
            empty={true}
            type="submit"
            disabled={!(title && text && iconFileId)}
          >
            {fact ? "Save" : "Create"}
          </Styled.Button>
          <Styled.Button type="button" onClick={closeWindow}>
            Cancel
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
      }
    </Styled.Wrapper>
  );
};

export default FactsForm;
