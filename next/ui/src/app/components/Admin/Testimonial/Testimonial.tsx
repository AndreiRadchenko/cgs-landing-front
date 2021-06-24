import ItemButtons from "../ItemButtons/ItemButtons";
import * as Styled from "../Item.styles";
import { ITestimonial } from "../types";

const Testimonial: React.FC<{
  testimonial: ITestimonial;
  openModal: Function;
  deleteItem: Function;
}> = ({ testimonial, openModal, deleteItem }) => {
  return (
    <Styled.Wrapper>
      <Styled.Item>
        <Styled.List>
          <Styled.ListItem>
            <span>Customer Name:</span>
            <Styled.ListItemText>
              <span>{testimonial?.customerName}</span>
            </Styled.ListItemText>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Company Name:</span>
            <Styled.ListItemText>
              <span>{testimonial?.companyName} </span>
            </Styled.ListItemText>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Country Code:</span>
            <Styled.ListItemText>
              <span>{testimonial?.countryCode} </span>
            </Styled.ListItemText>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Customer Position:</span>
            <Styled.ListItemText>
              <span>{testimonial?.customerPosition} </span>
            </Styled.ListItemText>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Feedback:</span>
            <Styled.ListItemText>
              <span>{testimonial?.feedback} </span>
            </Styled.ListItemText>

          </Styled.ListItem>
          {testimonial?.platforms?.map((platform) => (
            <>
              <Styled.ListItem>
                <span>{`${platform?.type} link:`}</span>
                <Styled.ListItemText>
                  <span> {platform?.link}</span>
                </Styled.ListItemText>
              </Styled.ListItem>
              <Styled.ListItem>
                <span>{`${platform?.type} rating:`}</span>
                <Styled.ListItemText>
                  <span className="red"> {platform?.rate}</span>
                </Styled.ListItemText>
              </Styled.ListItem>
            </>
          ))}
        </Styled.List>
      </Styled.Item>
      <ItemButtons
        deleteItem={() => deleteItem("testimonial", testimonial?.id)}
        openModal={openModal}
        item={testimonial}
      />
    </Styled.Wrapper>
  );
};

export default Testimonial;
