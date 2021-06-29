import React from "react";
import ReactCountryFlag from "react-country-flag";
import * as Style from "./slide.styled";
import { IProject } from "../../../../../types/components/index";
import { v4 as uuidv4 } from "uuid";
import IMAGES from "../../../../../consts/Images";

import countryCodes from '../../../../../consts/countyCodes.json';

const Slide: React.FC<IProject> = ({ item }) => (
  <Style.SlideContainer key={item?.id} className="testimonials-slide-container">
    <Style.SliderContent>
      <Style.ContentWrapper>
        <Style.SliderHeader>
          <Style.SliderHeaderTitle>{item?.name}</Style.SliderHeaderTitle>
          <Style.Flag>
            <ReactCountryFlag
              countryCode={item?.countryCode}
              svg
              style={{ width: '100%', height: '100%' }}
            />
          </Style.Flag>
          <Style.SliderHeaderWrap>
            <span className="slider-header__country">
              {countryCodes[item?.countryCode] ?? item?.countryCode}
            </span>
          </Style.SliderHeaderWrap>
        </Style.SliderHeader>
        <Style.SliderHeaderSubtitle>
          {item?.shortDescription}
        </Style.SliderHeaderSubtitle>
        <Style.SliderDescription>
          {item?.fullDescription.split('/n').map((item, idx) => (
            <span key={idx}>
              {item}
              <br />
            </span>
          ))}
        </Style.SliderDescription>
      </Style.ContentWrapper>
      <Style.ContentWrapper>
        <div className="slider-technologies">
          {item?.technologies?.map((tech) => (
            <div className="slider-technology" key={uuidv4()}>
              <img
                className="slider-technology__img"
                key={tech?.id}
                src={tech?.iconUrl ? tech?.iconUrl : IMAGES?.NODE}
              />
              <span className="slider-technology__text">{tech?.name}</span>
            </div>
          ))}
        </div>
        <Style.ReferenceWrapper>
          {item?.link && (
            <a href={item?.link} target="_blank" className="slider-link">
              <button className="slider-technologies__button" type="button">
                Project link
              </button>
            </a>
          )}{" "}
        </Style.ReferenceWrapper>
      </Style.ContentWrapper>
    </Style.SliderContent>
    <Style.SliderPicture
      className="slider-picture"
      src={item?.imageUrl}
      alt={item?.shortDescription}
    />
  </Style.SlideContainer>
);

export default Slide;
