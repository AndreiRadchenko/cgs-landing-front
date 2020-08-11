import React from 'react';
import * as Style from './slide.styled';
import dotWhite from '../../../../img/dot.svg';
import dotBlue from '../../../../img/dotBlue.svg';
import { SlideType } from '../../../../../types/components/index';

const Slide: React.FC<
  SlideType
> = ({ person1, person2, description, background, title }) => {
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
          <div className="person">
            <div className="person-photo">
              <img src={person2.img} alt="personPhoto"></img>
            </div>
            <div className="person-info">
              <div className="person-name">{person2.name}</div>
              <div className="person-position">{person2.position}</div>
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          position: 'absolute',
          width: '10%',
          height: '22%',
          top: '-4.5%',
          right: '-3.8%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {Array(25).fill(" ").map(_ => {
          return (
            <span
              style={{
                width: '20%',
                height: '20%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img width="50%" height="50%" src={dotWhite}></img>
            </span>
          );
        })}
      </div>
      <div
        style={{
          position: 'absolute',
          width: '4%',
          height: '22%',
          bottom: '50px',
          left: '-4.5%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {Array(10).fill(" ").map((_) => {
          return (
            <span
              style={{
                width: '50%',
                height: '20%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img width="50%" height="50%" src={dotBlue}></img>
            </span>
          );
        })}
      </div>
    </Style.SlideContainer>
  );
};

export default Slide;
