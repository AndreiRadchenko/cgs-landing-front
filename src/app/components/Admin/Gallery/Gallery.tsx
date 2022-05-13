import * as Styled from "../Item.styles";
import { IGallery } from "../types";
import ItemButtons from "../ItemButtons/ItemButtons";

const Gallery: React.FC<{
  gallery: IGallery;
  openModal: Function;
  deleteItem: Function;
}> = ({ gallery, openModal, deleteItem }) => (
  <Styled.Wrapper>
    <Styled.Item>
      <Styled.List>
        <Styled.ListItem>
          <span>Title:</span>
          <span>{gallery?.title}</span>
        </Styled.ListItem>
        <Styled.ListItem>
          <span>Text:</span>
          <div dangerouslySetInnerHTML={{ __html: gallery.text }} />
        </Styled.ListItem>
        <Styled.ListItem>
          <span>Show:</span>
          <span>{gallery?.showOnHomePage ? "yes" : "no"}</span>
        </Styled.ListItem>
        {gallery?.imageFiles?.map((image, imdex) => (
          <Styled.ListItem>
            <span>Picture {imdex + 1}:</span>
            <img src={image?.s3FileUrl} alt={image?.s3FileUrl} />
          </Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.Item>
    <ItemButtons
      openModal={openModal}
      item={gallery}
      deleteItem={() => deleteItem("gallery", gallery?.id)}
    />
  </Styled.Wrapper>
);

export default Gallery;
