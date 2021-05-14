import React from 'react';
import * as Style from './slide.styled';
import { IProject } from '../../../../../types/components/index';
import { v4 as uuidv4 } from 'uuid';
import IMAGES from '../../../../../consts/Images';

const Slide: React.FC<IProject> = ({ item }) => {
  return (
    <Style.SlideContainer
      key={item.id}
      className="testimonials-slide-container"
    >
      <div className="slider-content">
        <div className="slider-header">
          <p className="slider-header__title">{item.name}</p>
          <img className="slider-header__img" src="/spainFlag.png" />
          <span className="slider-header__country">Spain</span>
        </div>
        <p className="slider-subtitle">{item.shortDescription}</p>
        <p className="slider-description">{item.fullDescription}</p>
        <div className="slider-technologies">
          {item.technologies.map((tech) => (
            <div className="slider-technology" key={uuidv4()}>
              <img
                className="slider-technology__img"
                key={tech.id}
                src={tech.iconUrl ? tech.iconUrl : IMAGES.NODE}
              />
              <span className="slider-technology__text">{tech.name}</span>
            </div>
          ))}
        </div>
        {item?.link && (
          <a href={item?.link} target="_blank" className="slider-link">
            <button className="slider-technologies__button" type="button">
              Project link
            </button>
          </a>
        )}
      </div>
      <img className="slider-picture" src="/techImage.svg" />
    </Style.SlideContainer>
  );
};

export default Slide;
