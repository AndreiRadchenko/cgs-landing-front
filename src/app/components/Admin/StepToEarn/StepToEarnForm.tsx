import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
// import Images from "../Images/Images";
import { IStepToEarn } from "../types";
import * as Styled from "../Form.styles";
import { slides } from "app/img";
import { Button } from "app/components/shared/LinkButton/Button.style";

import TextEditor from "../TextEditor/TextEditor";

const StepToEarnForm: React.FC<{
  stepToEarn: IStepToEarn | undefined;
  close: Function;
}> = ({ stepToEarn, close }) => {
  const [text, setText] = useState(stepToEarn?.text || "");
  const [showOnPartnersPage, setShowOnPartnersPage] = useState(
    stepToEarn?.showOnPartnersPage ?? true
  );
  const [placeOnPartnersPage, setPlaceOnPartnersPage] = useState(
    stepToEarn?.placeOnPartnersPage ?? 1
  );

  const [editContent, setEditContent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newStepToEarn = {
      text,
      showOnPartnersPage,
      placeOnPartnersPage,
    };

    if (stepToEarn) {
      updateAdminData("stepToEarn", stepToEarn.id, newStepToEarn).then(() => {
        close();
      });
    } else {
      createAdminData("stepToEarn", newStepToEarn).then(() => {
        close();
      });
    }
  };

  const closeWindow = () => close();

  return (
    <Styled.Wrapper>
      {editContent ? (
        <TextEditor content={text} setArticleContent={setText} setIsEditorOpen={setEditContent} />
      ) : (
        <Styled.Form onSubmit={handleSubmit}>
          {stepToEarn ? <h2>Edit stepToEarn</h2> : <h2>Create new stepToEarn</h2>}
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
            <Styled.Button empty={true} type="submit" disabled={!text}>
              {stepToEarn ? "Save" : "Create"}
            </Styled.Button>
            <Styled.Button type="button" onClick={closeWindow}>
              Cancel
            </Styled.Button>
          </Styled.ButtonWrapper>
        </Styled.Form>
      )}
    </Styled.Wrapper>
  );
};

export default StepToEarnForm;
