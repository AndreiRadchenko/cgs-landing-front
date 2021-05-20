import { useState } from 'react';
import { createAdminData, updateAdminData } from 'services/api/adminApi';

import { ITestimonial } from '../types';
import * as Styled from '../Form.styles';

const TestimonialForm: React.FC<{
  testimonial?: ITestimonial | undefined;
  close: Function;
}> = ({ testimonial, close }) => {
  const [customerName, setCustomerName] = useState(
    testimonial?.customerName || ''
  );
  const [companyName, setCcompanyName] = useState(
    testimonial?.companyName || ''
  );
  const [countryCode, seCountryCode] = useState(testimonial?.countryCode || '');
  const [customerPosition, setCustomerPosition] = useState(
    testimonial?.customerPosition || ''
  );
  const [feedback, seFeedback] = useState(testimonial?.feedback || '');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newtestimonial = {
      customerName,
      customerPosition,
      companyName,
      countryCode,
      feedback,
    };

    testimonial
      ? updateAdminData(
          'testimonial',
          testimonial.id,
          newtestimonial
        ).then(() => close())
      : createAdminData('testimonial', newtestimonial).then(() => close());
  }

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {testimonial ? (
          <h2>Edit testimonial ID: {testimonial?.id}</h2>
        ) : (
          <h2>Create a testimonial</h2>
        )}
        <label>
          Customer Name:
          <input
            className="form__title"
            type="text"
            value={customerName}
            onChange={({ target: { value } }) => setCustomerName(value)}
          />
        </label>
        <label>
          Company Name:
          <input
            className="form__title"
            type="text"
            value={companyName}
            onChange={({ target: { value } }) => setCcompanyName(value)}
          />
        </label>
        <label>
          Country Code:
          <input
            className="form__title"
            type="text"
            value={countryCode}
            onChange={({ target: { value } }) => seCountryCode(value)}
          />
        </label>
        <label>
          Customer Position:
          <input
            className="form__title"
            type="text"
            value={customerPosition}
            onChange={({ target: { value } }) => setCustomerPosition(value)}
          />
        </label>
        <label>
          Feedback:
          <textarea
            className="form__text"
            value={feedback}
            onChange={({ target: { value } }) => seFeedback(value)}
          />
        </label>
        {testimonial?.platforms.map((platform) => (
          <div>
            <input type="text" value={platform.link} />
            <input type="text" value={platform.rate} />
            <input type="text" value={platform.type} />
          </div>
        ))}
        <div className="buttons">
          <button
            type="submit"
            disabled={
              !(
                customerName &&
                customerPosition &&
                companyName &&
                countryCode &&
                feedback
              )
            }
          >
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

export default TestimonialForm;
