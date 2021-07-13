import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import Images from "../Images/Images";
import { IStep } from "../types";
import * as Styled from "../Form.styles";
import { slides } from "app/img";
import { Button } from "app/components/shared/LinkButton/Button.style";

import TextEditor from "../TextEditor/TextEditor";

const StepForm: React.FC<{
  step: IStep | undefined;
  close: Function;
}> = ({ step, close }) => {
  const [title, setTitle] = useState(step?.title || "");
  const [text, setText] = useState(step?.text || "");
  const [iconFileId, setIconFileId] = useState(step?.iconFile?.id || "");
  const [showOnPartnersPage, setShowOnPartnersPage] = useState(step?.showOnPartnersPage ?? true);
  const [placeOnPartnersPage, setPlaceOnPartnersPage] = useState(step?.placeOnPartnersPage ?? 1);

  const [editContent, setEditContent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newStep = {
      title,
      text,
      iconFileId,
      showOnPartnersPage,
      placeOnPartnersPage,
    };

    if (step) {
      updateAdminData("step", step.id, newStep).then(() => {
        close();
      });
    } else {
      createAdminData("step", newStep).then(() => {
        close();
      });
    }
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
        {step
          ? <h2>Edit Step</h2>
          : <h2>Create new step</h2>
        }
        <Styled.Label>
          <span>Step title:</span>
          <Styled.AdminTextInput
            type="text"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
            placeholder="Write title here"
          />
        </Styled.Label>
        <Styled.Label>
          <span>Step text</span>
          <Styled.ContentContainerWrapper>
            <Styled.ContentWrapper>
              <Styled.Content dangerouslySetInnerHTML={{ __html: text }} />
            </Styled.ContentWrapper>
          </Styled.ContentContainerWrapper>
        </Styled.Label>
        <Styled.Label>
            <span>Content:</span>
            <Button type="button" onClick={() => setEditContent(true)}>
              Edit content
          </Button>
        </Styled.Label>
        <Styled.Label>
          <span>Pictures:</span>
          <Styled.PicturesWrapper>
            <Images activeImage={step?.iconFile} getImageId={getImageId} />
          </Styled.PicturesWrapper>
        </Styled.Label>
        <Styled.Label>
          <span>Show on page:</span>          
          <Styled.SingleCheckboxContainer>
            <Styled.CheckboxLabel position="static">
              <input
                type="checkbox"
                name="TechOption"
                checked={showOnPartnersPage}
                onChange={({ target: { checked } }) => setShowOnPartnersPage(checked)}
              />
              <Styled.CustomCheckbox selected={showOnPartnersPage}>
                <img src={slides.Check} alt="checkbox" />
              </Styled.CustomCheckbox>
            </Styled.CheckboxLabel>
          </Styled.SingleCheckboxContainer>
        </Styled.Label>
        <Styled.Label>
          <span>Place:</span>
          <Styled.AdminTextInput
            type="number"
            min="1"
            value={placeOnPartnersPage}
            onChange={(event) => {
              setPlaceOnPartnersPage(Number(event.target.value));
            }}
            placeholder="Place"
          />
        </Styled.Label>
        <Styled.ButtonWrapper>
          <Styled.Button
            empty={true}
            type="submit"
            disabled={!(title && text && iconFileId)}
          >
            {step ? "Save" : "Create"}
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

export default StepForm;
