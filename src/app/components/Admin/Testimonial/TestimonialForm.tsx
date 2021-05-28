import { useState } from 'react';
import { createAdminData, updateAdminData } from 'services/api/adminApi';

import { ITestimonial, IPlatform } from '../types';
import * as Styled from '../Form.styles';
import { useInput } from '../Hooks';

import CountryCodes from './countyCodes.json'






const TestimonialForm: React.FC<{
  testimonial?: ITestimonial | undefined;
  close: Function;
}> = ({ testimonial, close }) => {
  const clutch: IPlatform | undefined = testimonial?.platforms.find(
    (item) => item.type === 'clutch'
  );
  const upwork: IPlatform | undefined = testimonial?.platforms.find(
    (item) => item.type === 'upwork'
    );

  
  
  const [countryCode,setCountyCode] = useState(testimonial?.countryCode)
  const clutchLinkInput = useInput(clutch?.link);
  const upworkLinkInput = useInput(upwork?.link);
  const clutchRateInput = useInput(clutch?.rate);
  const upworkRateInput = useInput(upwork?.rate);
  const customerName = useInput(testimonial?.customerName);
  const companyName = useInput(testimonial?.companyName);
  const customerPosition = useInput(testimonial?.customerPosition);
  const feedback = useInput(testimonial?.feedback);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clutch =
      clutchLinkInput.value || clutchRateInput.value
        ? {
            type: 'clutch',
            link: clutchLinkInput.value,
            rate: clutchRateInput.value,
          }
        : null;
    const upwork =
      upworkLinkInput.value || upworkRateInput.value
        ? {
            type: 'upwork',
            link: upworkLinkInput.value,
            rate: upworkRateInput.value,
          }
        : null;
    const newtestimonial: ITestimonial = {
      customerName: customerName.value,
      customerPosition: customerPosition.value,
      companyName: companyName.value,
      countryCode,
      feedback: feedback.value,
      platforms: [],
    };
    if (clutch) {
      newtestimonial.platforms = [...newtestimonial.platforms, clutch];
    }
    if (upwork) {
      newtestimonial.platforms = [...newtestimonial.platforms, upwork];
    }

    testimonial
      ? updateAdminData(
          'testimonial',
          testimonial?.id!,
          newtestimonial
        ).then(() => close())
      : createAdminData('testimonial', newtestimonial).then(() => close());
  }


  const CountryCodesKeys = Object.keys(CountryCodes);  

  let handleFlagSelect = ({currentTarget}) => {
    setCountyCode(currentTarget.value)
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
          <input className="form__title" type="text" {...customerName} />
        </label>
        <label>
          Company Name:
          <input className="form__title" type="text" {...companyName} />
        </label>
        <label>
          Country Code:
          <select className="form__title" onChange={handleFlagSelect}>
          {CountryCodesKeys.map(countyKey => {
          return(
            <option selected={CountryCodes[countyKey] === countryCode} value={CountryCodes[countyKey]} key={countyKey}>
              {countyKey}
            </option>)
            })})
          </select>
        </label>
        <label>
          Customer Position:
          <input className="form__title" type="text" {...customerPosition} />
        </label>
        <label>
          Feedback:
          <textarea className="form__text" {...feedback} />
        </label>
        <div>
          <p>Clutch</p>
          <input type="text" {...clutchLinkInput} />
          <input type="number" min="1" max="5" {...clutchRateInput} />
        </div>
        <div>
          <p>Upwork</p>
          <input type="text" {...upworkLinkInput} />
          <input type="number" min="1" max="5" {...upworkRateInput} />
        </div>

        <div className="buttons">
          <button
            type="submit"
            disabled={
              !(
                customerName.value &&
                customerPosition.value &&
                companyName.value &&
                countryCode &&
                feedback.value
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
