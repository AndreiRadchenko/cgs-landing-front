import { IStep } from "../types";
import ItemButtons from "../ItemButtons/ItemButtons";
import * as Styled from "../Item.styles";

const Step: React.FC<{
  step: IStep;
  openModal: Function;
  deleteItem: Function;
}> = ({ step, openModal, deleteItem }) => (
  <Styled.Wrapper>
    <Styled.Item>
      <Styled.List>
        <Styled.ListItem>
          <span>Title:</span>
          <span>{step.title}</span>
        </Styled.ListItem>
        <Styled.ListItem>
          <span>Text:</span>
          <div dangerouslySetInnerHTML={{ __html: step.text }} />          
        </Styled.ListItem>
        <Styled.ListItem>
          <span>Picture:</span>
          <img
            src={step.iconFile?.s3FileUrl}
            alt={step.iconFile?.s3FileUrl}
          />
        </Styled.ListItem>
        <Styled.ListItem>
          <span>Show:</span>
          <span>{step.showOnPartnersPage ? "Yes" : "No"}</span>
        </Styled.ListItem>
        <Styled.ListItem>
          <span>Place:</span>
          <span>{step.placeOnPartnersPage}</span>
        </Styled.ListItem>
      </Styled.List>
    </Styled.Item>
    <ItemButtons
      openModal={openModal}
      item={step}
      deleteItem={() => {
        deleteItem("step", step.id);
      }}
    />
  </Styled.Wrapper>
);

export default Step;
