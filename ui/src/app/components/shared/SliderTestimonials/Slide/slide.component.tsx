import React from 'react';
import * as Style from './slide.styled';
import dotWhite from '../../../../img/dot.svg';
import dotBlue from '../../../../img/dotBlue.svg';
import { SlideType } from '../../../../../types/components/index';

const Slide: React.FC<SlideType> = ({
  person1,
  person2,
  description,
  background,
  title,
}) => {
  return (
    <Style.SlideContainer
      className="testimonials-slide-container"
      style={{ background: `${background}`, width: '90%', height: '100%' }}
    >
      <div className="article">
        <span>{title}</span>
        <Style.HorizantalSep />
      </div>
      <div className="body">
        <div className="person">
          <div className="person-photo">
            <img src={person1.img} alt="personPhoto"></img>
          </div>
          <div className="person-info">
            <div className="person-name">{person1.name}</div>
            <div className="person-position">{person1.position}</div>
          </div>
        </div>
        {description ? (
          <div className="description">
            <p>{description}</p>
          </div>
        ) : (
          person2 && (
            <div className="person">
              <div className="person-photo">
                <img src={person2.img} alt="personPhoto"></img>
              </div>
              <div className="person-info">
                <div className="person-name">{person2.name}</div>
                <div className="person-position">{person2.position}</div>
              </div>
            </div>
          )
        )}
      </div>
      <Style.TopRightDotsContainer>
        {Array(25)
          .fill(' ')
          .map(_ => {
            return (
              <span>
                <img src={dotWhite}></img>
              </span>
            );
          })}
      </Style.TopRightDotsContainer>
      <Style.BottomLeftDotsContainer>
        {Array(10)
          .fill(' ')
          .map(_ => {
            return (
              <span>
                <img src={dotBlue}></img>
              </span>
            );
          })}
      </Style.BottomLeftDotsContainer>
    </Style.SlideContainer>
  );
};

export default Slide;
