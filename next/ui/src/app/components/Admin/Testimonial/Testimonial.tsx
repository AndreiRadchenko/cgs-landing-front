import ItemButtons from '../ItemButtons/ItemButtons';
import * as Styled from '../Item.styles';
import { ITestimonial } from '../types';

const Testimonial: React.FC<{
  testimonial: ITestimonial;
  openModal: Function;
  deleteItem: Function;
}> = ({ testimonial, openModal, deleteItem }) => {
  return (
    <Styled.Wrapper>
      <Styled.Item>
        <ul>
          <li>ID: {testimonial.id} </li>
          <li>Name: {testimonial.customerName} </li>
          <li>Category: {testimonial.companyName} </li>
          <li>Category: {testimonial.countryCode} </li>
          <li>Category: {testimonial.customerPosition} </li>
          <li>Category: {testimonial.feedback} </li>
          <li>
            Category:
            <ul>
              {testimonial.platforms.map((platform) => (
                <li>
                  <p>{platform.link}</p>
                  <p>{platform.rate}</p>
                  <p>{platform.type}</p>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </Styled.Item>
      <ItemButtons
        deleteItem={() => deleteItem('testimonial', testimonial.id)}
        openModal={openModal}
        item={testimonial}
      ></ItemButtons>
    </Styled.Wrapper>
  );
};

export default Testimonial;
