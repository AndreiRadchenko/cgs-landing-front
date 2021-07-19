import { IStepToEarn } from "../types";
import ItemButtons from "../ItemButtons/ItemButtons";
import * as Styled from "../Item.styles";

const StepToEarn: React.FC<{
  stepToEarn: IStepToEarn;
  openModal: Function;
  deleteItem: Function;
}> = ({ stepToEarn, openModal, deleteItem }) => (
  <Styled.Wrapper>
    <Styled.Item>
      <Styled.List>
        <Styled.ListItem>
          <span>Text:</span>
          <div dangerouslySetInnerHTML={{ __html: stepToEarn.text }} />
        </Styled.ListItem>
        <Styled.ListItem>
          <span>Show:</span>
          <span>{stepToEarn.showOnPartnersPage ? "Yes" : "No"}</span>
        </Styled.ListItem>
        <Styled.ListItem>
          <span>Place:</span>
          <span>{stepToEarn.placeOnPartnersPage}</span>
        </Styled.ListItem>
      </Styled.List>
    </Styled.Item>
    <ItemButtons
      openModal={openModal}
      item={stepToEarn}
      deleteItem={() => {
        deleteItem("stepToEarn", stepToEarn.id);
      }}
    />
  </Styled.Wrapper>
);

export default StepToEarn;
