import { IFeaturedTechnology } from "../types";
import ItemButtons from "../ItemButtons/ItemButtons";
import * as Styled from "../Item.styles";

const FeaturedTechology: React.FC<{
  featuredTechnology: IFeaturedTechnology;
  openModal: Function;
  deleteItem: Function;
}> = ({ featuredTechnology, openModal, deleteItem }) => {
  return (
    <Styled.Wrapper>
      <Styled.Item>
        <ul>
          <li>ID: {featuredTechnology.id} </li>
          <li>Name: {featuredTechnology.name} </li>
          <li>Text: {featuredTechnology.text} </li>
        </ul>
        <img
          src={featuredTechnology.imageFile.s3FileUrl}
          alt={featuredTechnology.imageFile.s3FileUrl}
        />
      </Styled.Item>
      <ItemButtons
        openModal={openModal}
        item={featuredTechnology}
        deleteItem={() => deleteItem("slogan", featuredTechnology.id)}
      ></ItemButtons>
    </Styled.Wrapper>
  );
};

export default FeaturedTechology;
